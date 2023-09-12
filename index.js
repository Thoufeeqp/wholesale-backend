require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./db/connection')

const adminRoutes=require('./routes/adminRoutes')
const truckdriverRoutes=require('./routes/truckdriverRoutes')
const vendorRoutes=require('./routes/vendorRoutes')
const productRoutes=require('./routes/productRoutes')
const orderRoutes=require('./routes/orderRoutes')
const server=express()

server.use(cors())
server.use(express.json())

// admin 
server.use('/admin', adminRoutes);
server.use('/truck-driver', truckdriverRoutes);
server.use('/vendor',vendorRoutes);
server.use('/product', productRoutes);
server.use('/order', orderRoutes);

const PORT=process.env.PORT ||3000

server.listen(PORT,()=>{
    console.log('server started at 3000');

})

server.get('/',(req,res)=>{
    res.status(200).json('server start')
})