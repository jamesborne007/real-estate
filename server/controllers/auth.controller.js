
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async(req,res, next) => {
    const {username, email, password} = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hashPassword});
    try {
        await newUser.save();
        res.status(200).json({ message: 'User created successfully'})   
    } catch (error) {
        next(error);    
    }
       

};

export const signin = async(req, res, next) => {
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({email: email});
        if(!validUser) return next(errorHandler(404, 'User not found'));
        const validPasword = bcryptjs.compareSync(password, validUser.password);
        if (!validPasword) return next(errorHandler(401, 'wrong credentials'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SERCET )
        const {password: pass, ...restInfo} = validUser._doc;
        res.cookie('accessToken',token,{httpOnly : true}).status(200).json(restInfo);
      
    } catch (error) {
        next(error);
        
    }

};
