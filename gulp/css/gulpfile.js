// babel - converte js para uma sintaxe antiga que será mais compatível nos browsers
// series - permite usar pipe(encadear tarefas/tasks)
// uglify - remove espaçamentos e linhas desnecessárias
// concat - concatena(junta) todos arquivos tratados pelo bebel em um único só
// dest - seleciona pasta de destino do arquivo
// on - dispara ação quando identificar um evento

const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

async function transformacaoCSS() {
  return await gulp
    .src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      uglifycss({
        uglyComments: true
      })
    )
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
}

async function copiarHTML() {
  await gulp.src('./src/*.html').pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHTML)
