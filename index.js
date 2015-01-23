var through2 = require('through2');

module.exports = function(){
  return through2(function(chunk, enc, cb){
    cb(null, chunk+'\n');
  });
};