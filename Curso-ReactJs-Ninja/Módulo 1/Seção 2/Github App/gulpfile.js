'use strict'

const {watch, series } = require('gulp')
const { spawn } = require('child_process')

// gulp.task('lint', (cb) => {
//   const cmd = spawn('yarn', ['lint'], { stdio: 'inherit' })
//   cmd.on('close', () => cb())
// })

function lintTask (cb) {
  const cmd = spawn('yarn', ['lint'], { stdio: 'inherit' })
  cmd.on('close', () => cb())
}

// gulp.task('default', ['lint'], () => {
//   gulp.watch('src/**/*.js', ['lint'])
// })

function defaultTask (cb) {
  watch(['src/**/*.js'], lintTask(cb))
}


exports.default = series(defaultTask, lintTask)
