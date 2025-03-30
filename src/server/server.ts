import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Investra Backend is running....')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
