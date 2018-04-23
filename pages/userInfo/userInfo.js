// pages/userInfo/userInfo.js
function getRandomColor() {
  let result = [];
  for (let i = 0;i < 3; i++) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color.length === 1 && (color = '0' + color);
    result.push(color)
  }
  return '#'+ result.join('')
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    loading: true,
    pictures:[
      {
        id: 1,
        url: '/assets/img/s1.jpg'
      },
      {
        id: 2,
        url: '/assets/img/s2.jpg'
      },
      {
        id: 3,
        url: '/assets/img/s3.jpg'
      },
      {
        id: 4,
        url: '/assets/img/s4.jpg'
      },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 500,
    filePath: '' // 从相册或者
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
    let color = getRandomColor()
    console.log(color)
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
  },
  loginBtn: function () {
    console.log('登录')
    wx.getUserInfo({
      success: function (e) {
        console.log(e)
      }
    })
  },
  bindButtonTap: function () {
    console.log('选取视频')
    video.chooseVideo({
      sourceType: ['album', 'camera'],
      compressed: true,
      success: (res) => {
        if (res.tempFilePath) {
          this.setData({
            filePath: res.tempFilePath
          })
        }
      },
      fail: (err) => {
        console.log(err.message)
      }
    })
  }
})