const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '../docs');
const INDEX = 'index.html';

const indexHTML = fs.readFileSync(path.resolve(BUILD_DIR, INDEX), 'utf8');
const resolvedIndexHTML = indexHTML.split('"/').join('"./');

fs.writeFileSync(path.resolve(BUILD_DIR, INDEX), resolvedIndexHTML);
