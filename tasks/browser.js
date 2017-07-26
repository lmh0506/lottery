import gulp from 'gulp'
import gulpif from 'gulp-if' // 用于在gulp语句中做if判断
import gutil from 'gulp-util' // gulp常用工具集合
import livereload from 'gulp-livereload' // 热更新
import args from './util/args' // 命令行参数解析

gulp.task('browser', (cb) => {
  if(!args.watch) return cb()

  gulp.watch('app/**/*.js', ['script'])
  gulp.watch('app/**/*.ejs', ['pages'])
  gulp.watch('app/**/*.css', ['css'])
})
