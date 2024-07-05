import mongoose from "mongoose";

    const firmSchema = new mongoose.Schema({
        firmName: {
            type: String,
            unique:true,
            required:true
          },
         area: {
            type: String,
            required:true
          },
          category: {
            type: [{
              type:String,
              enum:["veg","non-veg"]
            }]
          },
         region: {
            type: [{
              type:String,
              enum:["south-indian","north-indian","chinese","bakery"]
            }]
         },
         offer:{
            type:String
         },
         image:{
            type:String
         },
         vendor: [{ type: mongoose.Schema.Types.ObjectId,
           ref: 'Vendor' }],
       product: [{ type: mongoose.Schema.Types.ObjectId,
          ref: 'Product' }]
       });
      // Create the model from the schema
      const Firm = mongoose.model('Firm', firmSchema);

      export default Firm;


   
      