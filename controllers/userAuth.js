const bcrypt = require('bcryptjs');
const userModel = require('../models/user');
const jwt = require('jsonwebtoken');


exports.postSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const encryptedPw = await bcrypt.hash(password,10);
        const newUser = new userModel({
            userName:name,
            email,
            password:encryptedPw
        });
        const savedNewUser = await newUser.save();
        res.json({
            success:true,
            msg:"New User Saved Successfully"
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            success: false,
            msg: "INTERNAL SERVER ERROR"
        })
    }
}

exports.postSignin = async (req,res,next) => {
    try{
        const {email,password} = req.body;
        const userSearch =  await userModel.findOne({email});
        if(!userSearch)
        {
            return res.json({
                success:false,
                msg:"No such user registered"
            })
        }
        const passwordValidity = await bcrypt.compare(password,userSearch.password);
        if(!passwordValidity)
        {
            return res.json({
                success:false,
                msg:"Invalid email or password"
            });
        }
        const userInfo = {...userSearch._doc};
        delete userInfo.password;
        const token = jwt.sign(
            userInfo,
            process.env.JWT_Secret
        );
        userInfo.token = token;
        res.json({
            success:true,
            msg:"User logged in successfully",
            userInfo
        });
    }
    catch(e)
    {
        console.log(e);
        res.json({
            success:false,
            msg:"INTERNAL SERVER ERROR"
        });
    }
}

exports.getUserInfo = (req,res,next) => {
    try {
        res.json({
            success:true,
            msg:"Authorized",
            userInfo:req.user
        });
    }
    catch(e)
    {
        res.json({
            success:false,
            msg:"INTERNAL SERVER ERROR"
        });
    }
}