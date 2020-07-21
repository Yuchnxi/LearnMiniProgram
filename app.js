const TOKEN = 'token'

App({
  globalgloData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1. 先从缓冲中取出 token
    wx.getStorageSync(TOKEN)
    
    // 2. 判断 token 是否有值
    if (token && token.length !== 0) {  // 已经有 token，验证 token 是否过期
      this.check_token(token)
    }else {
      this.login()
    }
  },
  // 验证登录操作
  check_token(token) {
    wx.request({
      url: 'http://152.136.185.210:8000/api/n3/auth',
      method: 'post',
      header: {
        token
      },
      success: res => {
        if (!res.data.errCode) {
          this.globalgloData.token = token
        } else {
          this.login()
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  // 登录操作
  login() {
    wx.login({
      // code 只有五分钟的有效期
      success: res => {
        // 1.获取 code
        const code = res.code

        // 2.将 code 发送到我们服务器
        wx.request({
          url: 'http://152.136.185.210:8000/api/n3/login',
          method: 'post',
          data: {
            code
          },
          success: res => {
            // 1.获取 token
            const token = res.data.token

            // 2. 将 token 保存在 globalgloData 中
            this.globalgloData.token = token
            
            // 3. 进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})
