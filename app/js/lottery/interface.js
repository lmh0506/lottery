// 接口模块
import $ from 'jquery'

class Interface{
  /**
   * getOmit 获取当前数据
   * issue 当前期号
  */
  getOmit(issue){
    const self = this
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/omit',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: res => {
          self.setOmit(res.data)
          resolve.call(self, res)
        },
        error: err => {
          reject.call(err)
        }
      })
    })
  }

  /**
   * getOpenCode 获取开奖号码
   * issue 期号
  */
  getOpenCode(issue){
    const self = this
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/opencode',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: res => {
          self.setOpenCode(res.data)
          resolve.call(self, res)
        },
        error: err => {
          reject.call(err)
        }
      })
    })
  }

  /**
   * getState 获取当前状态
   * issue 期号
  */
  getState(issue){
    const self = this
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/state',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: res => {
          resolve.call(self, res)
        },
        error: err => {
          reject.call(err)
        }
      })
    })
  }
}

export default Interface
