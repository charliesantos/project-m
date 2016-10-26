import mongoose from 'mongoose';

let TestSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  }
});

export default mongoose.model('Test', TestSchema);