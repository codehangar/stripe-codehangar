console.log('start');

var spawn = require('child_process').spawn;

var child = require('./build');

child.on('close', function(exitCode) {
  if (exitCode === 0) {
    var child2 = spawn('gulp', ['serve']);
    child2.stdout.pipe(process.stdout);
    child2.stderr.pipe(process.stderr);

    var child3 = spawn('webpack', ['--colors', '--watch']);
    child3.stdout.pipe(process.stdout);
    child3.stderr.pipe(process.stderr);
  }
});
