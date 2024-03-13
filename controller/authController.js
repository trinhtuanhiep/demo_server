import UserModel from '../model/userModel.js'
import bcrypt from 'bcrypt'
// import { errorHandler } from '../utils/error.js' 
export const SignUp = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        const hashPassword = bcrypt.hashSync(password, 10)
        const newUser = await UserModel.create({ username, email, password: hashPassword })
        res.status(201).json({ newUser: newUser, message: "user created successfully" })
    } catch (error) {
        // res.status(500).json(error.message)
        next(error)
    }
}