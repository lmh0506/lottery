import yargs from 'yargs'

const args = yargs

  // option 函数用来提取命令行参数

  // 判断为开发环境还是生产环境
  .option('production', {
    boolean: true, // 设置该参数为bool类型
    default: false, // 默认值为  false  即开发环境
    describe: 'min all scripts'
  })

  // 要不要监听修改的文件
  .option('watch', {
    boolean: true,
    default: false,
    describe: 'watch all files'
  })

  // 命令行输出日志
  .option('verbose', {
    boolean: true,
    default: false,
    describe: 'log'
  })

  // 内容映射
  .option('sourcemaps', { // 强制生成
    describe: 'force the creation of sourcemaps'
  })

  .option('port', {
    string: true,
    default: 3000,
    describe: 'server port'
  })

  .argv

export default args;