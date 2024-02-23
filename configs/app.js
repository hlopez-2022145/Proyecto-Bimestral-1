import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import userRoutes from '../src/user/user.routes.js'
import categoryRoutes from '../src/category/category.routes.js'
import productRoutes from '../src/product/product.routes.js'

const app = express() //creamos el servidor
config()
const port = process.env.PORT || 3200

//Configuramos el servidor express
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Aceptamos o denegamos las solicitudes de diferentes origenes(local, remoto)
app.use(cors())
app.use(helmet())

//Crear logs de solicitudes al servidor HTTP
app.use(morgan('dev'))

app.use(userRoutes)
app.use('/category', categoryRoutes)
app.use('/product', productRoutes)

export const initServer = () =>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}