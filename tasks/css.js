import gulp from 'gulp'
import gulpif from 'gulp-if' // 用于在gulp语句中做if判断
import livereload from 'gulp-livereload' // 热更新
import args from './util/args' // 命令行参数解析

gulp.task('css', () => {
  return gulp.src('app/**/*.css')
    .pipe(gulp.dest('server/public'))
})
