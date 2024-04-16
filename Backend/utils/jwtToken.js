
// Creating Token and saving it into cookie

const sendToken = (user,statusCode,res,avatar = {})=>{
    const token = user.getJWTToken()
 
    const options={
        expire : new Date(
            Date.now + process.env.COOKIE_EXPIRE * 24 *60 * 60 * 1000
        ),
        httpOnly :  true,
    };
    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        user,
        token,
        avatar,
    })
}

module.exports = sendToken