import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)

app.register(appRoutes)

app.listen({
    port: 3333,
    host: '0.0.0.0',  // Fix: 'AxiosError: Network Error'
}).then((url) => {
   // console.log(`HTTP Server running on port ${(app.server as any).address().port}`)
   console.log(`HTTP Server running on ${url}`)
})