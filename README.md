# is-system-error
Checks if the error is one of the system errors encountered when writing a Node.js program

### Server-side usage

```javascript
var IS_SYSTEM_ERROR = require('is-system-error');

IS_SYSTEM_ERROR.isSystemError(new Error()); //=> false

var error = new Error();
error.code = 'ECONNRESET';

IS_SYSTEM_ERROR.isSystemError(error); //=> true
```

The library can also be installed through [npm][npm]

```bash
$ npm install -g is-system-error
$ npm install --save is-system-error
```

### Clone the repo

```bash
$ git clone https://github.com/luthraG/is-system-error.git
```

### API

#### isSystemError(obj)

Given a object this API checks if it is system error or not

**Example**

```javascript
var IS_SYSTEM_ERROR = require('is-system-error');

IS_SYSTEM_ERROR.isSystemError(new Error()); //=> false

var error = new Error();
error.code = 'ECONNRESET';

IS_SYSTEM_ERROR.isSystemError(error); //=> true


var error = new Error();
error.code = 'EMFILE';

IS_SYSTEM_ERROR.isSystemError(error); //=> true

```

### Author

**Gaurav Luthra**

* [github/luthraG](https://github.com/luthraG)


### License(MIT)

```
Copyright (c) 2017 Gaurav Luthra <luthra.zenith@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```