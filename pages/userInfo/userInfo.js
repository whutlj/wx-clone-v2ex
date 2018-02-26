// pages/userInfo/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _self = this
    //设置navigationBarTitleText
    wx.setNavigationBarTitle({
      title: '会员详情',
    })
    //获取用户信息
    let userName = options.userName
    _self.setData({
      loading: true
    })
    _self.getUserInfo(userName)
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
  getUserInfo: function (userName) {
    const _self = this
    wx.request({
      url: 'https://www.v2ex.com/api/members/show.json?username=' + userName,
      method: 'Get',
      dataType: 'json',
      success: function (res) {
        const data = res.data
        _self.setData({
          userInfo: data
        })
        console.log(data)
      },
      fail: function () {
        console.log('获取用户信息失败,用户名:'+ userName)
      },
      complete: function () {
        _self.setData({
          loading: false
        })
      }
    })
  }
})