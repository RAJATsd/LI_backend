const mongoose = require('mongoose');

const schema = mongoose.Schema;

const basicInfoSchema = new schema({
    userId : {
        type:schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    profilePic:{
        type:String
    },
    about:{
        type:String
    },
    state:{
        type:String
    },
    country: {
        type:String
    },
    dob : {
        type:Date
    }
});

module.exports = mongoose.model('basicInfo',basicInfoSchema);