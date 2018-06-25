Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgUrls: [
      'http://qrt.5spay.cn:8096/AdImages/_H5TOP_20180504161138_01.jpg',
      'http://qrt.5spay.cn:8096/AdImages/_H5TOP_20180504161213_02.jpg',
      'http://qrt.5spay.cn:8096/AdImages/_H5TOP_20180504161242_03.jpg'
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    items: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'],

    listItems: [
      '../../images/dd.jpg',
      '../../images/aa.png',
      '../../images/bb.png',
      '../../images/cc.jpg']

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  onSwiperTap: function (event) {
    // target 和currentTarget
    // target指的是当前点击的组件 和currentTarget 指的是事件捕获的组件
    // target这里指的是image，而currentTarget指的是swiper

    // var postId = event.target.dataset.data - postId;
    // console.log("获取到的postId是:" + postId);// NaN

    wx.showToast({
      title: '即将跳转',
      icon: 'loading',
      duration: 800
    })

    wx.switchTab({
      url: "../me/me"
    })

  },

  all_good: function (event) {
    console.log(event)
    wx.showToast({
      title: '已显示全部',
      icon: 'succee',
      duration: 2000
    })

  },

  all_active: function (event) {
    console.log(event)
    wx.showToast({
      title: '已显示全部',
      icon: 'loading',
      duration: 600
    })

  },
  onJptjTap: function (event) {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
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