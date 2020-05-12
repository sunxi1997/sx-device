
type DeviceKey =
    | 'trident'
    | 'presto'
    | 'iPad'
    | 'iPhone'
    | 'webKit'
    | 'webApp'
    | 'mobile'
    | 'ios'
    | 'android'
    | 'gecko'
    | 'wechat'


declare interface Device {
    //是否为  IE内核
    trident: boolean,

    //是否为  opera内核
    presto: boolean,

    //是否为  iPad
    iPad: boolean,

    //是否为  iPhone或者QQHD浏览器
    iPhone: boolean,

    //是否为  苹果、谷歌内核
    webKit: boolean,

    //是否为  web应用程序
    webApp: boolean,

    //是否为  移动终端
    mobile: boolean,

    //是否为  ios终端
    ios: boolean,

    //是否为  android终端或uc浏览器
    android: boolean,

    //是否为  火狐内核
    gecko: boolean,

    //是否为  微信环境
    wechat: boolean,

    // 是否为某种设备
    is(key: DeviceKey): boolean;
}


declare module "device" {
    export = Device;
}
