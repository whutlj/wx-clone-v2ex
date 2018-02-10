//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 所有topic的列表
    topicList: []
  },
  onLoad: function () {
    const _slef = this
    _slef.getAllInfo();
  },
  getAllInfo: function () {
    const _slef = this
    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      method: 'Get',
      dataType: 'json',
      success: function (res) {
        let data = res.data
        _slef.setData({
          topicList: data
        })
      },
      fail: function () {
        // TODO 弹出提示框
        console.log('请求数据失败')
      }
    })
  }
})
