const productSchema = require('../models/productModel')

const getSingleProduct = async(req, res) => {
  try{
    const { id: product_id} = req.params
    const product = await productSchema.findOne({ _id: product_id})
    if(!product) return res.status(404)
    res.status(200).json({product})
  }catch(err){
    res.status(500).json({msg : err})
  }
}

const getAllProduct = async(req, res) => {
  try{
    const product = await productSchema.find({})
    if(!product) return res.status(404)
    res.status(200).json({product})
  }catch(err){
    res.status(500).json({msg:err})
  }
}

module.exports = {
  getSingleProduct,
  getAllProduct
}
