var fs = require('fs');
var path = require('path');
var lame = require('lame');
var Speaker = require('speaker');

var fpath = path.resolve(__dirname, 'sandstorm.mp3');
console.log(fpath);
var mp3Stream = fs.createReadStream(fpath);

mp3Stream.pipe(new lame.Decoder)
  .on('format', console.log)
  .pipe(new Speaker);
