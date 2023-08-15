import User from "../model/user.js";
import bcrypt from 'bcrypt';
export const SignUpUser = async (request,response) =>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(request.body.password,salt);
        const user = {name : request.body.name ,email: request.body.email , password : hashedPassword};
        const newUser = new User(user);
        await newUser.save();
        return response.status(200).json({msg : 'SignUp Successful'})
    }catch (error){
        return response.status(500).json({msg : 'Error While Sign Up The User'})
    }
}