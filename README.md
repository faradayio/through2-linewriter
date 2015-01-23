# through2-linewriter
Opposite of a line reader. Appends a newline to every chunk pushed through the stream. Uses through2

## Installation

```console
npm install through2-linewriter
```

or

```console
npm install --save through2-linewriter
```

## Usage

```javascript
var linewriter = require('through2-linewriter');

var writer = linewriter();

writer.pipe(process.stdout);

writer.write('Hello, World!'); //writes "Hello, World!\n"
writer.write('This goes on the next line'); //writes "This goes on the next line\n"
```