// pages/hot/hot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const _self = this;
    _self.getHotTopic();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getHotTopic: function () {
    const _self = this
    wx.request({
      url: "https://www.v2ex.com/api/topics/hot.json",
      dataType:"json",
      success: function (res) {
        console.log(res.data)
        _self.topicList = res.data
      },
      fail: function () {
        console.log('获取最热主题失败')
      }
    })
  }
})