// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})