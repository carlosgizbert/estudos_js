const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
  console.log('Tarefas Antes 1')
  return cb()
}

const antes2 = cb => {
  console.log('Tarefas Antes 2')
  return cb()
}

function copiar(cb) {
  gulp
    .src(['pastaA/arquivo1.txt', 'pastaA/**/*.txt'])
    // .pipe(imagePelaMetade())
    // .pipe(imageEmPretoEBranco())
    // .pipe(transformacaoA())
    // .pipe(transformacaoB())
    .pipe(gulp.dest('pastaB'))

  console.log('Tarefa de copiar!')
  return cb()
}

const fim = cb => {
  console.log('Tarefa fim')
  return cb()
}

module.exports.default = series(parallel(antes1, antes2), copiar, fim)
