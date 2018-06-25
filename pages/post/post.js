Page({

  /**
   * 页面的初始数据
   */
  data: {
    post: [],
    comments: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取id
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 500
    })

    var that = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id=' + options.id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({ post: res.data[0] })
      }
    }),

      wx.request({
        url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + options.id,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data);
          that.setData({ comments: res.data })
        }
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

  }
})