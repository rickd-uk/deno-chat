import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const messages = []

const router = new Router()
router
  .get('/', (context) => {
    context.respose.body = 'Chat server'
  })
  .get('/messages', (context) => {
    context.respose.body = messages
  })
  .post('/messages', async (context) => {
    const message = await context.request.body().value
    messages.push(message)
  })

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

addEventListener('fetch', app.fetchEventHandler())
