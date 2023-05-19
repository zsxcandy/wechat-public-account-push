/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbbad0f09e444414e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0ba4e096e5cc9560a9de14b6d1fc5276',

  PROVINCE: '北京',
  CITY: '北京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o5puu5xrGbPJOqkPCyRixx-C-upY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'CoWOhGNtfewCwTrwHqRxjVxScE6ABGkI_bPWQxvPTuA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '老婆', year: '1991', date: '04-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '陈思思', year: '1991', date: '06-09',
        },
        {
          type: '节日', name: '相识纪念日', year: '2019', date: '09-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-10-06' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2020-10-20' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'StP83Fc1ai865P0hmZQf5Xc4IfWHVJivqioSmqqGN4I',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'VesqqFZzh4UW2Z45FiV5dAVBTDEKNDiBHL4TihQXlTg',
    }
  ],

}

module.exports = USER_CONFIG

