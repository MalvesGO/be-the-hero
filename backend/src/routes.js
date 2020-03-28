const express = require("express")

// Controllers
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// Rotas
const routes = express.Router()

// Login
routes.post('/sessions', SessionController.create)

// Ongs
routes.get('/ongs', OngController.index)
routes.post("/ongs", OngController.create)

// Profile
routes.get('/profile', ProfileController.index)

// Incidentes
routes.get("/incidents", IncidentController.index)
routes.post("/incidents", IncidentController.create)
routes.delete("/incidents/:id", IncidentController.delete)

module.exports = routes;