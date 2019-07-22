const koa = require('koa')
const cors = require('koa-cors')
const app = new koa()

const router = require('./src/router/index')

const PORT = 3001

// 解决跨域问题
app.use(cors())

app.use(router.routes)
app.use(router.allowedMethods)

app.listen(PORT, () => {
  console.log(`Serve starting...`)
})
