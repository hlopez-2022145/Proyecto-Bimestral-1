'use strict'

import { Router } from 'express'
import { addProduct, productMasVendido, productSoldOut, listProducts } from './product.controller.js'

const api = Router()

api.post('/addProduct', addProduct)
api.get('/productMasVendido', productMasVendido)
api.get('/productSoldOut', productSoldOut)
api.get('/listProducts', listProducts)

export default api