const tool = require('../../assets/js/tool.js')
const BOTTOM = '底部'
Page({
  data: {
    msg: '主页',
    id:3,
    obj: [{
        id: 1,
        val: 'one'
      },
      {
        id: 2,
        val: 'two'
      }]
  },
  onLoad: function () {
    console.log('onLoad')
  },
  onPullDownRefresh: function () {
    console.log('下拉刷新了')
  },
  onReachBottom: function () {
    console.log('到达底部了：' + BOTTOM)
  },
  onPageScroll: function (options) {
    console.log(options.scrollTop)
  },
  onShareAppMessage: function () {
    return {
      title: '转发',
      path: '/pages/main/mainTwo'
    }
  },
  clickEvent: function (event) {
    wx.request({
      url: 'https://www.v2ex.com/api/topics/hot.json',
      success: function (data,statusCode,header){
        console.log(data);
        console.log(statusCode);
      }
    })
  },
  shareClick: function () {
    wx.navigateTo({
      // url: '/pages/share/share?req=123&name=lj'
      url: '/pages/main/mainTwo'
    })
  },
  addInput: function () {
    let obj = tool.deepCopy(this.data.obj)
    console.log(obj)
    let id = this.data.id
    obj.push({
      id: id,
      val: Math.random().toFixed(2)
    })
    this.setData({
      id: id,
      obj: obj
    })
  }
});