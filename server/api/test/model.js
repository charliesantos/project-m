import mongoose from 'mongoose';

let TestSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  meta: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
});

export default mongoose.model('Test', TestSchema);