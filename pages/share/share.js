Page({
  data: {
    req: ''
  },
  onLoad: function (query) {
    this.setData({
      req: query.name
    })
  }
})