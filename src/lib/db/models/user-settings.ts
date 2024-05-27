import mongoose from 'mongoose';

export interface PaymentMethod {
    title: string;
    _id: string;
}

const UserSettingSchema = new mongoose.Schema({
    // Define your schema properties here
    title: { type: String },
    userId: { type: String },
    paymentMethods: { type: Array<PaymentMethod> },
});

export default mongoose.models.UserSetting || mongoose.model('UserSetting', UserSettingSchema);
