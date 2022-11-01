import express from 'express'

const Route = new express.Router()
import Products from '../constant/Model/ProductSchema.mjs'

// GET PRODUCTDATA API 
Route.get('/getproducts', async(req, res)=>{
    try{
        const productdata = await Products.find();
        // console.log("console data " , productdata)
        res.status(201).json(productdata)

    }catch(error){
        console.log('error', error.message)

    }
})



export default Route;