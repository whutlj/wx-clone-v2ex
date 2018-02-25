//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 所有topic的列表
    topicList: [],
    loading: true,
  },
  onLoad: function () {
    const _slef = this
    _slef.setData({
      loading: true
    })
    _slef.getAllInfo();
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    const _self = this
    _self.setData({
      loading: true
    })
    _self.getAllInfo()
  },
  getAllInfo: function () {
    const _slef = this
    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      method: 'Get',
      dataType: 'json',
      success: function (res) {
        console.log(res.data)
        let data = res.data
        _slef.setData({
          topicList: data,
          loading: false
        })
      },
      fail: function () {
        // TODO 弹出提示框
        console.log('请求数据失败')
        _slef.setData({
          loading: false
        })
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
    const topicDetail = event.currentTarget.dataset.topicDetail
    wx.navigateTo({
      url: '/pages/topicDetail/topicDetail?topicDetail=' + topicDetail,
    })
  }
})
