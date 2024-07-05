import mongoose from "mongoose";

    const vendorSchema = new mongoose.Schema({
      username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
      },
      password: {
        type: String,
        required: true
      },
      firm: [{ type: mongoose.Schema.Types.ObjectId, 
        ref: 'Firm' }]
    });
    
      
      // Create the model from the schema
      const Vendor = mongoose.model('Vendor', vendorSchema);
      
      export default Vendor;