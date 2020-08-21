const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sentEmailSchema = new Schema(
    {
        username: {
            type: String,

        },

        email: {
            type: String,

        },
        sentEmailFlag:{
            type: String, 
            default: false
        },
        date:{
            type: Date, 
            default: Date.now
        }
    },
    { timestamps: true }
);