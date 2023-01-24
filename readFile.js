const { createWorker } = require('tesseract.js')

module.exports = async (filePath) => {
  const worker = await createWorker({
    cachePath: './data',
  })

  await worker.loadLanguage('eng')
  await worker.initialize('eng')
  const res = await worker.recognize(filePath)
  await worker.terminate()

  return res.data.text
}
