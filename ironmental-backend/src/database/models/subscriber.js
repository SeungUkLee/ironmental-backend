import mongoose, { Schema } from 'mongoose';

const SubscriberSchema = new Schema({
    createdAt: { type: Date, default: Date.now },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    confirmCode: {
        type: String
    },
    isCertify: {
        type: Boolean,
        required: true
    }
});


export default mongoose.model('Subscriber', SubscriberSchema);
