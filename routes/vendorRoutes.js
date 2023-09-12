const express=require('express')
const controller=require('../controller/vendorController')
const middleware=require('../middleware/routerspecific')

const vendorRoutes=new express.Router()
// Create a new vendor
vendorRoutes.post('/create',middleware.loggmiddleware,controller.createvendor)
// To read a vendor by id
vendorRoutes.get('/:id',middleware.loggmiddleware,controller.getvendors)
// To update a vender by id
vendorRoutes.put('/update/:id',middleware.loggmiddleware,controller.updatevendor)
// to delete a vendor by id
vendorRoutes.delete('/delete/:id',middleware.loggmiddleware,controller.deletevendor)
// To get all vendor details
vendorRoutes.get('',middleware.loggmiddleware,controller.getallvendors)
module.exports=vendorRoutes