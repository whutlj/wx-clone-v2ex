// pages/topicDetail/topicDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    replies: [],
    topicContent: {},
    loading: true,
    loadingContent: true,
    loadingReplies: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _self = this
    let topicId = options.topicId
    _self.getTopicContent(topicId)
    _self.getTopicReplies(topicId)
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
        if (!_self.loadingReplies) {
          _self.setData({
            loading: false
          })
        }
      }
    })
  },
  getTopicReplies: function (topicId) {
    const _self = this
    wx.request({
      url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + topicId,
      success: function (res) {
        let replies = res.data
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
        if (!_self.loadingContent) {
          _self.setData({
            loading: false
          })
        }
      }
    })
  }
})