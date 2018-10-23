const sass = require('sass');
const fs = require('fs');

const result = sass.renderSync({file: 'src/style.scss'});

fs.writeFileSync('public/style.css', result.css);