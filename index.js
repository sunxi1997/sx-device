/**
 * @version 1.0.0
 *
 * @author sunxi1997
 *
 * @description 判断设备类型
 */

const {userAgent: UA} = navigator;

const UA_L = UA.toLowerCase();

/**
 * @type Device
 */
export const device = {
  //IE内核
  trident: UA.includes('Trident'),
  //opera内核
  presto: UA.includes('Presto'),
  //是否iPad
  iPad: UA.includes('iPad'),
  //是否为iPhone或者QQHD浏览器
  iPhone: UA.includes('iPhone'),
  //苹果、谷歌内核
  webKit: UA.includes('AppleWebKit'),
  //是否web应用程序
  webApp: UA.indexOf('Safari') === -1,
  //是否为移动终端
  mobile: !!UA.match(/AppleWebKit.*Mobile.*/),
  //ios终端
  ios: !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
  //android终端或uc浏览器
  android: UA.includes('Android') || UA.includes('Linux'),
  //火狐内核
  gecko: UA.includes('Gecko') && UA.indexOf('KHTML') === -1,
  // 微信
  wechat: UA_L.match(/MicroMessenger/i) == 'micromessenger',

  is: key => device[key]
};


export default device;


