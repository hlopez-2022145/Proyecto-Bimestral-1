'use strict'

import Category from './category.model.js'

//ADD
export const addCategory = async (req, res) => {
    try {
        let data = req.body
        let category = new Category(data)
        await category.save()
        return res.send({ msg: 'Category added successfully ' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ msg: 'Error added category' })
    }
}

//TO LIST
export const listCategory = async (req, res) => {
    try {
        let categories = await Category.find()
        //if (categories.length == 0) return res.status(404).send({ msg: 'Not found' })
        return res.send({msg: 'The categories list are: ', categories })
    }catch (err) {
        console.error(err)
        return res.status(500).send({ msg: 'Error gettind category' })
    }
}

//UPDATE
export const update = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let updateCategory = await Category.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        if (!updateCategory) return res.status(401).send({ msg: 'Category not foun and not updated' })
        return res.send({ msg: 'Updated category', updateCategory })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ msg: 'Error updated category' })
    }
}

//DELETE
export const deleteCategory = async(req, res) =>{
    try{
        let { id } = req.params
        let deleteCategory = await Category.findOneAndDelete({_id: id })
        if(deleteCategory.deleteCount == 0) return res.status(404).send({msg: 'Category not found, not deleted'})
        return res.send({msg: 'Deleted category successfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({msg: 'Error deleting category'})
    }
}