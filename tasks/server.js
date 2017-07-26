import gulp from 'gulp'
import gulpif from 'gulp-if' // 用于在gulp语句中做if判断
import liveserver from 'gulp-live-server' // 用于启动服务器
import args from './util/args' // 命令行参数解析

gulp.task('server', (cb) => {
  if(!args.watch) return cb() //如果不在监听状态下  直接返回回调函数

  var server = liveserver.new(['--harmony', 'server/bin/www'])
  server.start()

  // watch方法用于监听文件变化  文件已修改就会执行指定任务
  gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function(file){
    server.notify.apply(server, [file])
  })

  gulp.watch(['server/routes/**/*.js', 'server/app.js'], function(){
    server.start.bind(server)()
  })
})
