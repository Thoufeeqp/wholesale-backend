const express=require('express')
const controller=require('../controller/truckdriverController')
const middleware=require('../middleware/routerspecific')
const cartcontroller=require('../controller/cartcontroller')
const billcontroller=require('../controller/billcontroller')
const truckdriverRoutes=new express.Router()

// truck-driver login using phonenumber and password
truckdriverRoutes.post('/login',controller.login)
// Create a new truckdriver
truckdriverRoutes.post('/create',middleware.loggmiddleware,controller.createtruckdriver)
// To read a truckdriver by id
truckdriverRoutes.get('/:id',middleware.loggmiddleware,controller.gettruckdriver)
// To update a truckdriver by id
truckdriverRoutes.put('/update/:id',middleware.loggmiddleware,controller.updatetruckdriver)
// to delete a truckdriver by id
truckdriverRoutes.delete('/delete/:id',middleware.loggmiddleware,controller.deletetruckdriver)
// to add products to cart
truckdriverRoutes.post('/addtocart',middleware.loggmiddleware,cartcontroller.addToCart)
// to get cart
truckdriverRoutes.post('/getcart',middleware.loggmiddleware,cartcontroller.getcart)
// to create bill
truckdriverRoutes.post('/createbill',middleware.loggmiddleware,billcontroller.createBill)

module.exports=truckdriverRoutes