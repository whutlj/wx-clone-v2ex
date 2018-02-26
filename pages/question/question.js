// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    topicList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _self = this
    _self.setData({
      loading: true
    })
    _self.getQNATopic();
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
  scrollToUpper: function () {
    console.log('全部刷新')
    const _self = this
    _self.setData({
      loading: true
    })
    _self.getQNATopic()
  },
  onPullDownRefresh: function () {
    console.log('问与答刷新')
    const _self = this
    _self.setData({
      loading: true
    })
    _self.getQNATopic()
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
  getQNATopic: function () {
    const _self = this
    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      method: 'Get',
      dataType: 'json',
      success: function (res) {

        let data = res.data
        let result = []
        const len = data.length
        for (let i = 0; i < len; i++) {
          let node = data[i].node
          if (node.name == 'qna') {
            result.push(data[i])
          }
        }
        console.log(result)
        _self.setData({
          topicList: result
        })
      },
      fail: function () {
        // TODO 弹出提示框
        console.log('请求数据失败')
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
      url: '/pages/userInfo/userInfo?userName=' + userName
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
      url: '/pages/topicDetail/topicDetail?topicId=' + topicId
    })
  }
})