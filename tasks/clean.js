import gulp from 'gulp'
import del from 'del' // 删除文件
import args from './util/args' // 命令行参数解析

gulp.task('clean', () => {
  return del(['server/public', 'server/views'])
})
