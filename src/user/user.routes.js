'use strict'

import express from 'express'

import { validateJwt } from '../middlewares/validate-jwt.js'
import { deleteUser, login, registerUser, test, update } from './user.controller.js'

const api = express.Router()

api.get('/test', [validateJwt], test)
api.post('/registerUser', registerUser)
api.post('/login', login)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteUser)

export default api