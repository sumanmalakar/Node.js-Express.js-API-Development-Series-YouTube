import path from 'path'

// join two or more file
const fullPath = path.join('/path','index.py','file.java')
// console.log(fullPath)

// absolute path
const absolutePath = path.resolve()
// console.log(absolutePath)

// filedirectory
const directoryName = path.dirname('/main.java')
// console.log(directoryName)

// base path
const basepath = path.basename('/public/java/constructor.java')
// console.log(basepath)

// extension

const extName = path.extname('arijit.mp3')
console.log(extName)