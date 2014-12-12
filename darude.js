var fs = require('fs');
var lame = require('lame');
var Speaker = require('speaker');

var mp3Stream = fs.createReadStream(__dirname + 'sandstorm.mp3');

mp3Stream.pipe(new lame.Decoder)
  .on('format', console.log)
  .pipe(new Speaker);
