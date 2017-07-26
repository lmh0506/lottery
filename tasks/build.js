import gulp from 'gulp'
import gulpSequence from 'gulp-sequence' // 任务执行顺序

gulp.task('build', gulpSequence('clean', 'css', 'pages', 'script', ['browser', 'server']))