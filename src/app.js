require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const app = express()

const morganOption = (process.env.NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

echo "NODE_ENV=development" > .env
# using >> to append content
echo ".env" >> .gitignore

app.use(helmet())

+ app.get('/', (req, res) => {
+   res.send('Hello, world!')
+ })

module.exports = app