// pages/hot/hot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicList: [],
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _self = this;
    _self.setData({
      loading: true
    })
    _self.getHotTopic();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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
    console.log('最热刷新')
    const _self = this
    _self.setData({
      loading: true
    })
    _self.getHotTopic()
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
        _self.setData({
          topicList: res.data
        })
      },
      fail: function () {
        console.log('获取最热主题失败')
      },
      complete: function () {
        _self.setData({
          loading: false
        })
        wx.stopPullDownRefresh()
      }
    })
  },
  getUserInfo: function (event) {
    const userName = event.currentTarget.dataset.userName
    wx.navigateTo({
      url: '/pages/userInfo/userInfo'
    })
  },
  getNodeInfo: function (event) {
    const nodeInfo = event.currentTarget.dataset.nodeInfo
    wx.navigateTo({
      url: '/pages/nodeInfo/nodeInfo?nodeInfo=' + nodeInfo,
    })
  },
  getTopicDetail: function (event) {
    const topicId = event.currentTarget.dataset.topicId
    wx.navigateTo({
      url: '/pages/topicDetail/topicDetail?topicId=' + topicId,
    })
  }
})