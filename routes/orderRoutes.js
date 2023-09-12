const express=require('express')
const controller=require('../controller/orderController')


const orderRoutes=new express.Router()

orderRoutes.post('/create',controller.createorder)

module.exports=orderRoutes