const jwt = require('jsonwebtoken');
const user = require('../models/user');

const authMiddleware = async (req,res,next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader.split(' ')[1];
        
        if(token == null)
        {
            return res.json({
                success: false,
                msg : "No token provided"
            });
        }

        const user = await jwt.verify(token,process.env.JWT_Secret);
        req.user = user;
        next();
    }
    catch(e)
    {
        console.log(e);
        return res.json({
            success:false,
            msg:"Unauthorized"
        });
    }
}

module.exports = authMiddleware;