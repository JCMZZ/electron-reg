'use strict'

process.env.NODE_ENV = 'production'
/* 命令行文本样式 */
const { say } = require('cfonts')
/**
 * Chalk提供了一个易于使用的可组合API，您可以在其中链接和嵌套您想要的样式。
 */
const chalk = require('chalk')
/**
 * 类似于 rimraf，但是有一个承诺API，支持多个文件和全局化
 * 包含不删除当前工作目录及以上
 * 用于删除构建代码
 */
const del = require('del')
const webpack = require('webpack')
/**
 * node-multispinner 是一个 Node.js 模块，用于管理 CLI 应用程序中的多个进度指示器(微调器)
 * 对于同时执行异步任务(例如 Promise.all[])的应用程序尤其有用，它可以按任何顺序实时更新对单个旋转器，而其他旋转器继续旋转
 */
const Multispinner = require('multispinner')
/**
 * Electron 配置
 */
const mainConfig = require('./webpack.main.config')
/**
 * Vue 页面配置
 */
const rendererConfig = require('./webpack.renderer.config')
/**
 * Web 页面配置
 */
const webConfig = require('./webpack.web.config')

const doneLog = chalk.bgGreen.white(' DONE ') + ' '
const errorLog = chalk.bgRed.white(' ERROR ') + ' '
const okayLog = chalk.bgBlue.white(' OKAY ') + ' '
/**
 * CI是否持续集成
 */
const isCI = process.env.CI || false

if (process.env.BUILD_TARGET === 'clean') clean()
else if (process.env.BUILD_TARGET === 'web') web()
else build()
/**
 * build目录清除
 */
function clean () {
  del.sync(['build/*', '!build/icons', '!build/icons/icon.*'])
  console.log(`\n${doneLog}\n`)
  process.exit()
}
/**
 * dist目录清除
 */
function build () {
  greeting()

  del.sync(['dist/electron/*', '!.gitkeep'])

  const tasks = ['main', 'renderer']
  const m = new Multispinner(tasks, {
    preText: 'building',
    postText: 'process'
  })

  let results = ''

  m.on('success', () => {
    process.stdout.write('\x1B[2J\x1B[0f');
    console.log(`\n\n${results}`)
    console.log(`${okayLog}take it away ${chalk.yellow('`electron-builder`')}\n`)
    process.exit()
  })

  pack(mainConfig).then(result => {
    results += result + '\n\n'
    m.success('main')
  }).catch(err => {
    m.error('main')
    console.log(`\n  ${errorLog}failed to build main process`)
    console.error(`\n${err}\n`)
    process.exit(1)
  })

  pack(rendererConfig).then(result => {
    results += result + '\n\n'
    m.success('renderer')
  }).catch(err => {
    m.error('renderer')
    console.log(`\n  ${errorLog}failed to build renderer process`)
    console.error(`\n${err}\n`)
    process.exit(1)
  })
}
/**
 * webpack 命令执行
 * @param {Object} config webpack 配置 
 */
function pack (config) {
  return new Promise((resolve, reject) => {
    config.mode = 'production'
    webpack(config, (err, stats) => {
      if (err) reject(err.stack || err)
      else if (stats.hasErrors()) {
        let err = ''

        stats.toString({
          chunks: false,
          colors: true
        })
        .split(/\r?\n/)
        .forEach(line => {
          err += `    ${line}\n`
        })

        reject(err)
      } else {
        resolve(stats.toString({
          chunks: false,
          colors: true
        }))
      }
    })
  })
}
/**
 * web 构建清除
 */
function web () {
  del.sync(['dist/web/*', '!.gitkeep'])
  webConfig.mode = 'production'
  webpack(webConfig, (err, stats) => {
    if (err || stats.hasErrors()) console.log(err)

    console.log(stats.toString({
      chunks: false,
      colors: true
    }))

    process.exit()
  })
}
/**
 * 命令行打印构建日志
 */
function greeting () {
  const cols = process.stdout.columns
  let text = ''

  if (cols > 85) text = 'lets-build'
  else if (cols > 60) text = 'lets-|build'
  else text = false

  if (text && !isCI) {
    say(text, {
      colors: ['yellow'],
      font: 'simple3d',
      space: false
    })
  } else console.log(chalk.yellow.bold('\n  lets-build'))
  console.log()
}