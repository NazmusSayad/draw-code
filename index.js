const fs = require('fs')
const readFile = require('./readFile.js')
const filePath = process.argv[2]

const updateCode = async () => {
  const fileData = await readFile(filePath)

  try {
    eval(fileData)
  } catch (err) {
    console.error(err)
  }
}

fs.watchFile(filePath, { interval: 500 }, updateCode)
updateCode()
