const express=require('express')
const controller=require('../controller/productController')


const productRoutes=new express.Router()
// Create a new product
productRoutes.post('/create',controller.createproduct)
// To read a product by id
productRoutes.get('/:id',controller.getproduct)
// To update a product by id
productRoutes.put('/update/:id',controller.updateproduct)
// to delete a product by id
productRoutes.delete('/delete/:id',controller.deleteproduct)

module.exports=productRoutes