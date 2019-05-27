//document.getElementById('title-text').innerHTML = marked('# Marked in the browser\n\nRendered by **marked**.');
//https://github.com/markedjs/marked/issues/128
var marked = require('marked'), fs = require('fs');
var ct = fs.readFileSync('novel/novel02.md', 'utf8');
//document.getElementById('title-text').innerHTML = marked(ct);
//document.getElementById('title-text').innerHTML = marked('# Marked in the browser\n\nRendered by **marked**.');