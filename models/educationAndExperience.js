const mongoose = require('mongoose');

const schema = mongoose.Schema;

const educationAndExperienceSchema = new schema({
    userId : {
        type:schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    experience : [
        {
            position : {
                type:String,
                required:true
            },
            company : {
                type:String,
                required:true
            },
            from : {
                type:Date,
                required:true
            },
            to : {
                type: Date
            }
        }
    ],
    education : [
        {
            institution : {
                type: String,
                required:true
            },
            course : {
                type: String,
                required:true
            },
            subject : {
                type:String,
                required:true
            },
            from : {
                type:Date,
                required:true
            },
            to: {
                type : Date
            }
        }
    ],
    skills : [
        String
    ]
});

module.exports = mongoose.model('educationAndEperience',educationAndExperienceSchema);