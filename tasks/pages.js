import gulp from 'gulp'
import gulpif from 'gulp-if' // 用于在gulp语句中做if判断
import livereload from 'gulp-livereload' // 热更新
import args from './util/args' // 命令行参数解析

gulp.task('pages', () => {
  //app 文件夹下的所有ejs文件
  return gulp.src('app/**/*.ejs')
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch, livereload()))
})
