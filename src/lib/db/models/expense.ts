import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema({
    // Define your schema properties here
    title: { type: String },
    date: { type: Date },
    amount: { type: Number },
    description: { type: String },
    paymentMethod: { type: String },
    userId: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

export default mongoose.models.Expense ||  mongoose.model('Expense', ExpenseSchema);
