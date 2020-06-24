// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 键盘输入时触发
  handleInput(event) {
    console.log('用户输入内容：', event)
  },
  // 输入框聚焦时触发
  handleFocus(event) {
    console.log('输入框聚焦时触发', event)
  },
  // 输入框失去焦点时触发
  handleBlur(event) {
    console.log('输入框失去焦点时触发', event)
  }
})