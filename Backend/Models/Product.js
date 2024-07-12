import mongoose from "mongoose";

    const productSchema = new mongoose.Schema({
      productName: {
        type: String,
        required: true,
      },
     price: {
        type: String,
        required: true,
      },
      category: {
        type: [{
          type:String,
          required:true,
          enum:["veg","non-veg"]
        }]},
        bestSeller: {
            type: String,
          },
        description:{
            type:String
        },
        image:{
          type:String,
      },
      firm: [{ type: mongoose.Schema.Types.ObjectId, 
        ref: 'Firm' }]
    });
    
      // Create the model from the schema
      const Product = mongoose.model('Product', productSchema);
      
      export default Product;