// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mes: 1,
    titles: ['衣服', '裤子', '鞋子']
  },
  // 按钮发生点击
  handleBtnClick() {
    console.log('按钮发生点击')
  },
  // 手指触摸动作开始
  handleTouchStart() {
    console.log('手指触摸动作开始')
  },
  // 手指触摸后移动
  handleTouchMove() {
    console.log('手指触摸后移动')
  },
  // 手指触摸动作结束
  handleTouchEnd() {
    console.log('手指触摸动作结束')
  },
  // 手指触摸后马上离开
  handleTap() {
    console.log('手指触摸后马上离开')
  },
  // 手指触摸后，超过350ms再离开
  handleLongpress() {
    console.log('手指触摸后，超过350ms再离开')
  },
  handleEventClick(event) {
    console.log('-----', event)
  },
  handleEventEnd(event) {
    console.log('+++++', event)
  },
  handleItemClick(event) {
    console.log(event)
    const dataset = event.currentTarget.dataset
    const index = dataset.index
    const title = dataset.item

    console.log(title, index)

  },

  // --------事件冒泡和事件捕获
  handleCaptureView1() {
    console.log('handleCaptureView1')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleBindView3() {
    console.log('handleBindView3')
  }
})