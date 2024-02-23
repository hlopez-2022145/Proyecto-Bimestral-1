'use strict'

import Product from './product.model.js'
import Category from '../category/category.model.js'

//ADD
export const addProduct = async (req, res) => {
    try {
        let data = req.body
        //Validamos si el producto ya existe en la DB
        let productExist = await Product.findOne({name: data.name})
        if(productExist){
            return res.status(400).send({msg: `The ${productExist.name} product already exists in the database`})
        } 
        //verificamos si existe el usuario
        // let user = await User.findOne({ _id: data.user })
        // if (!user){
        //     return res.status(404).send({ msg: 'User not found' })
        // } 
        //veridicamos si existe la categoria
        let category = await Category.findOne({ _id: data.category })
        if (!category){
            return res.status(404).send({ msg: 'Category not found' })
        } 
        let product = new Product(data)
        await product.save()
        return res.send({msg: 'Product added successfully'})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ msg: 'Error added product' })
    }
}
//TO LIST
export const listProducts = async(req, res) => {
    try{
        let listProduc = await Product.find()
        return res.send({mss:'The products are:', listProduc})
    }catch{
        console.error(err)
        return res.status(500).send({msg: 'Error gettind products'})
    }
}

//PRODUCTO MAS VENDIDO
export const productMasVendido = async(req, res) => {
    try{
        let listaMasVendida = await Promise.all([ //Promise.all([]) espera a que todas las promesas dentro del arreglo se resuelvan
            Product.find({sold: {$gt: 1}})//$gt (mayor que)
                .populate('category', 'category')
            ])
        return res.send({msg: 'Best selling product', listaMasVendida})
    }catch(err){
        console.error(err)
        return err
    }
}

//PRODUCTO AGOTADO
export const productSoldOut = async(req, res) => {
    try{
        let soulOut = await Promise.all([
            Product.find({stock: {$eq: 0}})//$eq (igual a)
                .populate('category', 'category')
        ])
        return res.send({msg: 'Product sold out', soulOut})
    }catch(err){
        console.error(err)
        return err
    }
}