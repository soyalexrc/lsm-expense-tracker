import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    // Define your schema properties here
    title: { type: String },
    description: { type: String },
    color: { type: String },
});

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);
