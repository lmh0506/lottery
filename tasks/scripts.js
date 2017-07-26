import gulp from 'gulp'
import gulpif from 'gulp-if' // 用于在gulp语句中做if判断
import concat from 'gulp-concat' // 在gulp中处理文件拼接
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream' // gulp是处理文件流 需要基于webpack-stream
import named from 'vinyl-named' // 用于文件重命名标志
import livereload from 'gulp-livereload' // 热更新
import plumber from 'gulp-plumber' // 处理文件信息流
import rename from 'gulp-rename' // 文件重命名
import uglify from 'gulp-uglify' // 压缩js 和 css
import {log, colors} from 'gulp-util' // 命令行输出
import args from './util/args' // 命令行参数解析

// 定义一个 script 任务 (自定义任务名称)
// task函数 定义一个gulp任务
gulp.task('script', () => {
  // src方法是指定需要处理的源文件的路径 返回值为当前文件流
  // pipe方法 是前一级的输出变成后一级的输入
  return gulp.src(['app/js/index.js'])
  .pipe(plumber({ // 集中处理错误
    errorHandle: function(){

    }
  }))
  .pipe(named())// 文件重新命名
  .pipe(gulpWebpack({ // 编译js文件
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel'
      }]
    }
  }), null, (err,stats) => {
    // 处理编译时的错误
    log(`Finished '${colors.cyan('script')}'`, stats.toString({
      chunks: false
    }))
  })
  // dest方法是指处理完文件后输出的路径
  .pipe(gulp.dest('server/public/js'))
  // 复制并重命名编译好的文件
  .pipe(rename({
    basename: 'cp',
    extname: '.min.js'
  }))
  // 压缩文件
  .pipe(uglify({
    compress: {
      properties: false
    },
    output: {
      'quote_keys': true
    }
  }))
  // 存储压缩完后的文件
  .pipe(gulp.dest('server/public/js'))
  // 判断命令行是否有 watch选项  有就进行热更新
  .pipe(gulpif(args.watch, livereload()))
})
