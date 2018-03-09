// pages/topicDetail/topicDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    replies: [],
    topicContent: {},
    loadingContent: true,
    loadingReplies: true,
    focusReply: false,
    bottom: 0,
    inputText:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _self = this
    let topicId = options.topicId
    _self.getTopicContent(topicId)
    _self.getTopicReplies(topicId)
    wx.setNavigationBarTitle({
      title: '主题详情',
    })
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
  getTopicContent: function (topicId) {
    const _self = this
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id=' + topicId,
      success: function (res) {
        let topicContent = res.data[0]
        _self.setData({
          topicContent: topicContent
        })
        console.log(topicContent)
      },
      fail: function () {
        console.log('获取主题内容失败,topicId = ' + topicId)
      },
      complete: function () {
        _self.setData({
          loadingContent: false
        })
      }
    })
  },
  getTopicReplies: function (topicId) {
    const _self = this
    wx.request({
      url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + topicId,
      success: function (res) {
        let replies = res.data
        console.log(replies)
        _self.setData({
          replies: replies
        })
      },
      fail: function () {
        console.log('获取回复失败，topicId：' + topicId)
      },
      complete: function () {
        _self.setData({
          loadingReplies: false
        })
      }
    })
  },
  userReply: function () {
    // wx.authorize({
    //   scope: 'scope.record',
    //   success: function () {
    //     console.log('授权成功')
    //   }
    // })
    const _self = this
    _self.setData({
      focusReply: true
    })
  },
  closeReply: function () {
    const _self = this
    _self.setData({
      focusReply: false
    })
  },
  bindConfirm: function (e) {
    const _self = this
    _self.setData({
      focusReply: false
    })
  },
  bindFocus: function (e) {
    console.log(e)
  },
  bindInput: function (e) {
    let val = e.detail.value
    this.setData({
      inputText: val
    })
  }
})