const userEdAndEx = require('../models/educationAndExperience');
const user = require('../models/user');
const userBasicInfo = require('../models/userBasicInfo');

const msg = "INTERNAL SERVER ERROR";

exports.postExperienceAndEducation = (req, res, next) => {
    try {
        res.json({
            success:true,
            msg:"Authorized",
            user : req.user
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            success: false,
            msg
        });
    }
}

exports.postBasicUserInfo = async(req, res, next) => {
    try {
        const { userId, profilePic, about, state, country, dob } = req.body;
        const newUserBasicInfo = new userBasicInfo({
            userId, 
            profilePic, 
            about, 
            state, 
            country, 
            dob
        });
        const newSavedInfo = await newUserBasicInfo.save()
        res.json({
            success:true,
            msg: "Info save successfully",
            data : newSavedInfo
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            success: false,
            msg
        })
    }
}
