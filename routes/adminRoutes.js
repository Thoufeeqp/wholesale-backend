const express=require('express')
const controller=require('../controller/adminController')
const billcontroller=require('../controller/billcontroller')

const adminRoutes=new express.Router()
//to register new admin
adminRoutes.post('/register',controller.createadmin)
// To login as a admin
adminRoutes.post('/login',controller.loginadmin)
// to read bill
adminRoutes.get('/getbill',billcontroller.getbill)

module.exports=adminRoutes