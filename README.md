# Backend FullStack Course

**Course Content:**

- Node and Express Fundamentals
- Complex REST API
- MERN App
- More Projects

**Node JS**

- Node Fundamentals
- Express JS
- Mongo DB, Mongoose
- Applications
- Deployment

### **Questions and Answers**

**What is Node JS?**

- Environment to run JS outside browser.
- Built on Chrome’s v8 JS Engine
- Big community
- Full stack.

## **Difference Between Browser Javascript and Node Js**

| Browser Js | Node Js |
| --- | --- |
| DOM | No DOM |
| Window | No Window |
| Interactive Apps  | Server Side Apps |
| No Filesystem | Filesystem |
| Fragmentation | Versions |
| ES6 Modules | Common JS |

**Important Points To Remember:**

- When working with Node Js, you have no access to browser api’s
- With Node Js, we are build server side applications.

To install Node Js, visit `nodejs.org`

To check current Node Js version installed in your computer, type this in your terminal
`node —version`

- How do we get Node evaluate our code?
Effectively we have two options. 
→ **REPL:** which stands for **Read, Eval, Print loop**
→ **CLI:** which stands for **Command Line Interface**
To read more about this one → ****[`https://vlaaad.github.io/clj-vs-cli`](https://vlaaad.github.io/clj-vs-cli)
- How to access REPL?
Go to the terminal and type node, that is it. Then you can see an arrow there. And you can start typing the javascript code there. 
For example:

![Screenshot 2024-01-26 at 11.41.50 AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/2b2171d6-ea64-4b4c-b9e9-dda5c79b196f/f9b63dda-5415-493d-a986-d3bacb6ca0ad/Screenshot_2024-01-26_at_11.41.50_AM.png)

       To escape from the above window, simply type Cntrl+C 

***Shortcut to open VS code terminal → Cntrl + `***

## Globals

- No window
- `__dirname` → path to current directory
- `__filename` → file name
- `require` → function  to use modules(CommonJs)
- `module` → Info about the current module(file)
- `process` → info about env where the program is being executed

## Modules in Node Js

- Common JS - Every file is module(by default)
- Module - Encapsulated Module(only share minimum)
- Every file is a module and if we need to export the module and access it in different file, use `exports` and `require`

For example:
`functions.js`

```json
const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

module.exports = sayHi;
```

`names.js`

```json
//local
const secret = 'SUPER SECRET';
//share
const john = 'John';
const peter = 'Peter';
//default exports
module.exports = { john, peter };
```

`app.js`

```json
/*
Common JS - Every file is module(by default)
Module - Encapsulated Module(only share minimum)
*/
const names = require('./utils/names');
const sayHi = require('./utils/functions');

sayHi('Midhun');
sayHi(names.john);
sayHi(names.peter);
```

### **Alternative Syntax(module export )**

Here is the example

```json
module.exports.items =['item1', 'item2'];
const person ={
  name:'Midhun'
}
module.exports.person = person;
```

## Built in Modules

- OS Module
- Path Module
- FS Module
- HTTP Module

To see the node js documentation, refer this one [`https://nodejs.org/docs/latest-v18.x/api/index.html`](https://nodejs.org/docs/latest-v18.x/api/index.html)

### OS Module

- The `node:os` module provides operating system-related utility methods and properties. It can be accessed using: `const os = require('node:os');`

Example:

```json
const os = require('os');
//info about current user
const user = os.userInfo();
console.log(user);

// methods returns the system uptime in seconds.
console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
```

### Path Module

- The `node:path` module provides utilities for working with file and directory paths. It can be accessed using:

Example:

```json
const path = require('path');

console.log(path.sep);
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
```

### Fs Module

- The `node:fs` module enables interacting with the file system in a way modeled on standard POSIX functions.
- `readFileSync`: To read data from a file.
- `writeFileSync`: To write a file.