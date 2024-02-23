'use strict'

import { Router } from 'express'
import { addCategory, deleteCategory, listCategory, update } from './category.controller.js'

const api = Router()

api.post('/addCategory', addCategory)
api.get('/listCategory', listCategory)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteCategory)

export default api