// 倒计时模块
class Timer{
  countdown(end, update, handle){
    const now = new Date().getTime()
    const self = this

    if(now - end > 0){ // 如果当前时间大于结束时间  说明倒计时结束
      handle.call(self) // 调用handle函数 并改变它this指向
    }else{
      let last_time = end - now // 当前时间离结束时间的剩余时间
      const px_d = 1000 * 60 * 60 * 24 // 一天的毫秒数
      const px_h = 1000 * 60 * 60 // 一小时的毫秒数
      const px_m = 1000 * 60 // 一分钟的毫秒数
      const px_s = 1000 // 一秒的毫秒数

      let d = Math.floor(last_time / px_d) // 剩余多少天
      let h = Math.floor((last_time - d * px_d) / px_h ) // 剩余多少小时
      let m = Math.floor((last_time - d * px_d - h * px_h) / px_m) // 剩余多少分
      let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s) // 剩余多少秒
      let r = []

      if(d > 0){
        r.push(`<em>${d}</em>天`)
      }
      if(r.length || h > 0){
        r.push(`<em>${h}</em>时`)
      }
      if(r.length || m > 0){
        r.push(`<em>${m}</em>分`)
      }
      if(r.length || s > 0){
        r.push(`<em>${s}</em>秒`)
      }

      self.last_time = r.join('')
      update.call(self, r.join(''))

      setTimeout(function() {
        self.countdown(end, update, handle)
      }, 1000);
    }
  }
}

export default Timer
