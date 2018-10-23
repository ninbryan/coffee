const gulp = require('gulp');
const rollup = require('rollup');
const sass = require('sass');
const fs = require('fs');

const rollupCfg = require('./.rollup.js');

function scriptsBuild(cb) {
  rollup.rollup(rollupCfg)
    .then(({write}) => write(rollupCfg.output))
    .then(() => cb());
}
exports.scriptsBuild = scriptsBuild;

function stylesBuild(cb){
  const result = sass.renderSync({file: 'src/style.scss'});
  fs.writeFileSync('public/style.css', result.css);
  cb();
}
exports.stylesBuild = stylesBuild;

exports.default = exports.watch = () => {
  gulp.watch('src/**/*.js', scriptsBuild);
  gulp.watch('src/**/*.scss', stylesBuild);
}