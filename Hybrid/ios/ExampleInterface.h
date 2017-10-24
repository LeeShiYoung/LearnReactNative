//
//  ExampleInterface.h
//  Hybrid
//
//  Created by 李世洋 on 2017/10/24.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>

@interface ExampleInterface : NSObject

@property (nonatomic, copy) NSString *contactName;

@property (nonatomic, copy) NSString *contactPhoneNumber;

@end
