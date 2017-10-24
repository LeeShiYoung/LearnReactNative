//
//  ExampleInterface.m
//  Hybrid
//
//  Created by 李世洋 on 2017/10/24.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "ExampleInterface.h"
#import "CallAddressBookViewController.h"

@interface ExampleInterface()
@property (nonatomic, strong)NSDictionary *dic;
@end

@implementation ExampleInterface {
  
  RCTPromiseResolveBlock _resolveBlock;
  RCTPromiseRejectBlock _rejectBlock;
}

- (instancetype)init {
  return self;
}

-(NSString *)contactName {
  if (!_contactName) {
    _contactName = @"";
  }
  return _contactName;
}
//@synthesize bridge = _bridge;


RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(sendMessage:(NSString *)msg resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  _resolveBlock = resolve;
  _rejectBlock = reject;
  NSLog(@"搜到来自 RN 的消息：%@", msg);
  
  NSData *data = [msg dataUsingEncoding:NSUTF8StringEncoding];
  NSError *error;
  NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableLeaves error:&error];
  if (error != nil) {
    NSLog(@"解析错误：%@", error);
  }
  
  NSString *login = dic[@"msgType"];
  if ([login isEqualToString:@"pickContact"]) {
    [self callAddress];
  }
}

- (void)callAddress {
  UIViewController *controller = [[[UIApplication sharedApplication] keyWindow] rootViewController];
  CallAddressBookViewController *addressViewController = [[CallAddressBookViewController alloc] init];
  [controller presentViewController:addressViewController animated:YES completion:nil];
  self.contactName = addressViewController.contactName;
  self.contactPhoneNumber = addressViewController.contactPhoneNumber;
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(calendarEventReminderReceived:) name:@"Num" object:nil];
}

- (void)calendarEventReminderReceived:(NSNotification *)notification {
  if (notification.object == nil) {
    return;
  }
  
  self.contactPhoneNumber = notification.object;
  self.contactName = notification.userInfo[@"name"];
  
  //去除获取到的电话号码中的特殊字符
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString: @"-" withString:@""];
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString: @"(" withString:@""];
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString: @")"withString:@""];
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString: @" " withString:@""];
  
  NSMutableDictionary *dic = [[NSMutableDictionary alloc] init];
  [dic setObject: @"pickContactResult" forKey:@"msgType"];
  if (self.contactPhoneNumber == nil) {
    self.contactPhoneNumber = @"";
  }
  [dic setObject:self.contactPhoneNumber forKey:@"peerNumber"];
  if (self.contactName == nil) {
    self.contactName = @"";
  }
  //组装发送给React Native侧的消息
  [dic setObject:self.contactName forKey:@"displayName"];
  self.dic = [dic copy];
  NSError *error = [[NSError alloc] init];
  NSData *data = [NSJSONSerialization dataWithJSONObject:self.dic options:0 error:&error];
  NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
  //向React Native侧发送消息
  _resolveBlock(str);
  
}
@end
