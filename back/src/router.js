const express = require('express')
const cors = require('cors')
const authMiddleware = require('./middlewares/auth.js')

const session = require('./controllers/session.js')
const user = require('./controllers/user.js')
const history = require('./controllers/history.js')
const health = require('./controllers/health.js')
const trainer = require('./controllers/trainer.js')
const notification = require('./controllers/notification.js')
const category = require('./controllers/category.js')

const routes = express()
routes.use(express.json())
routes.use(cors())

routes.post('/session', session.create)
routes.post('/user', user.create)
routes.get('/user/:email', user.get)

routes.use(authMiddleware)

routes.get('/recordcount/:table', session.recordcount)

routes.get('/trainer/:id', trainer.index)
routes.get('/trainer', trainer.get)

routes.get('/health/:id', health.index)
routes.get('/health', health.get)

routes.get('/notification/count/:iduser', notification.count)
routes.get('/notification/:iduser', notification.index)
routes.post('/notification/:id', notification.update)
routes.post('/notification', notification.insert)

routes.get('/user/:id', user.index)
routes.get('/user', user.index)
routes.delete('/user/:id', user.delete)

routes.get('/historychart/:id', history.chart)
routes.get('/history/:id', history.get)
routes.get('/history', history.get)
routes.put('/history', history.update)
routes.post('/history', history.insert)
routes.delete('/history/:id', history.remove)

routes.get('/specialty', category.specialty)
routes.get('/kindservice', category.kindservice)

routes.get('/city', category.city)
routes.get('/state', category.state)

module.exports = routes