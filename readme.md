# 判断设备类型

## 安装

### npm 安装
````
npm i sx-device
````

## 开始

````
  import Device from "sx-device";

  console.table({
    ' 是否为  IE内核': Device.trident,
    ' 是否为  opera内核': Device.presto,
    ' 是否为  iPad': Device.iPad,
    ' 是否为  iPhone或者QQHD浏览器': Device.iPhone,
    ' 是否为  苹果、谷歌内核': Device.webKit,
    ' 是否为  web应用程序，没有头部与底部': Device.webApp,
    ' 是否为  移动终端': Device.mobile,
    ' 是否为  ios终端': Device.ios,
    ' 是否为  android终端或uc浏览器': Device.android,
    ' 是否为  火狐内核': Device.gecko,
    ' 是否为  微信环境': Device.wechat,
  })

// 也可以用is判断

// 是否为 IE 内核
Device.is('trident')
````


## Device 属性

 键 | 类型 | 说明
 ---|---|---  
  trident | boolean | 是否为  IE内核
  presto | boolean | 是否为  opera内核
  iPad | boolean | 是否为  iPad
  iPhone | boolean | 是否为  iPhone或者QQHD浏览器
  webKit | boolean | 是否为  苹果、谷歌内核
  webApp | boolean | 是否为  web应用程序
  mobile | boolean | 是否为  移动终端
  ios | boolean | 是否为  ios终端
  android | boolean | 是否为  android终端或uc浏览器
  gecko | boolean | 是否为  火狐内核
  wechat | boolean | 是否为  微信环境
 
## Device 方法

### boolean Device.is(string DeviceKey)

#### 参数

##### string DeviceKey

可选值

 -| -
 ---|---  
  trident | 是否为  IE内核
  presto | 是否为  opera内核
  iPad | 是否为  iPad
  iPhone | 是否为  iPhone或者QQHD浏览器
  webKit | 是否为  苹果、谷歌内核
  webApp | 是否为  web应用程序
  mobile | 是否为  移动终端
  ios | 是否为  ios终端
  android | 是否为  android终端或uc浏览器
  gecko | 是否为  火狐内核
  wechat | 是否为  微信环境
  ... | 无返回值
  
  #### 返回值
  
  ##### boolean
 当前设备是否为指定类型
 