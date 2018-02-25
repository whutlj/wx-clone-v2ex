// pages/nodeInfo/nodeINfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodeInfo: {},
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const node = options.nodeInfo
    const _self = this
    wx.setNavigationBarTitle({
      title: '节点详情',
    })
    _self.setData({
      loading: true
    })
    _self.getNodeInfo(node)
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
  getNodeInfo: function (nodeName) {
    const _self = this
    wx.request({
      url: 'https://www.v2ex.com/api/nodes/show.json?name=' + nodeName,
      method: 'Get',
      dataType: 'json',
      success: function (res) {
        _self.setData({
          nodeInfo: res.data,
          loading: false
        })
      }
    })
  }
})