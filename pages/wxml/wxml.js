// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 50,
    movies: ['星际穿越', '盗梦空间', '大话西游', '惊天盗魔']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  // 点击按钮切换颜色
  handleSwitchColr() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  // 点击按钮切换显示隐藏字
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  // 点击按钮分数递增
  handleIncrement() {
    this.setData({
      score: this.data.score + 6
    })
  }
})