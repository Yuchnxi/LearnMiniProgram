// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 弹窗 ShowToast
  handleShowToast() {
    wx.showToast({
      title: '加载中',
      duration: 3000,
      icon: 'loading',
      mask: true
    })
  },
  // 弹窗 ShowModal
  handleShowModal() {
    wx.showModal({
      title: '我是内容',
      content: '哈哈哈哈',
      cancelColor: '#000000',
      success: function(res) {
        if (res.confirm) {
          console.log('点击确认')
        } else if (res.cancel) {
          console.log('点击取消')
        }
      }
    })
  },
  // 弹窗 ShowLoading
  handleShowLoading() {
    wx.showLoading({
      title: '我是标题',
    })

    setTimeout(() => {
      wx.hideLoading()
    }, 3000)
  },
  // 弹窗 ShowActionSheet
  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function(res) {
        console.log(res.tapIndex)
      }
    })
  },
  // 
  onShareAppMessage: function(res) {
    return {
      title: '你还是离开了',
      path: '/pages/about/about',
      imageUrl: "http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg"
    }
  }
})