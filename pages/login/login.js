var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: null,
    password: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // // 登陆 
  // formSubmit: function (e) {
  //   console.log('form发生了submit事件，携带数据为：', e.detail)
  // },

  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
  },
  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  },

  loginBtnClick: function () {

    // 用户名和密码验证的过程
    console.log(this.data.username);
    console.log(this.data.password);
    if (this.data.username == null) {
      wx.showToast({
        title: '用户名为空',
        icon: 'none',
        duration: 700
      })
    } else if (this.data.password == null) {
      wx.showToast({
        title: '密码为空',
        icon: 'none',
        duration: 700
      })
    } else {
      app.appData.userinfo = { username: this.data.username, password: this.data.password }
      wx.showToast({
        title: '正在登录',
        icon: 'loading',
        duration: 700
      })

      setTimeout(function () {
        wx.switchTab({ url: "../me/me" })
      }, 700);

    }

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