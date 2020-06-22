// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'ycx',
    students: [
      {id: 110, name: 'zhangsan', age: 30},
      {id: 120, name: 'lisi', age: 28},
      {id: 130, name: 'wangwu', age: 22}
    ],
    counter: 0,
    list: []
  },
  handleBtnClick() {
    // tihs.setDate()
    this.setData({
      counter: this.data.counter + 1
    })
    
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event)
  },
  // 页面被加载出来
  onLoad() {
    wx.request({
      url: 'http://152.136.185.210:8000/api/n3/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })
  }
}) 