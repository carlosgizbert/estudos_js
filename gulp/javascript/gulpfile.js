const gulp = require('gulp')
const { series } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

// babel - converte js para uma sintaxe antiga que será mais compatível nos browsers
// uglify - remove espaçamentos e linhas desnecessárias
// concat - concatena(junta) todos arquivos tratados pelo bebel em um único só
// dest - seleciona pasta de destino do arquivo
// on - dispara ação quando identificar um evento

function transformacaoJS(cb) {
  return gulp
    .src('./src/**/*.js')
    .pipe(
      babel({
        comments: false,
        presets: ['env']
      })
    )
    .pipe(uglify())
    .on('error', err => console.log(err))
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
}

function fim(cb) {
  console.log('Fimm!!')
  return cb()
}

exports.default = series(transformacaoJS, fim)
