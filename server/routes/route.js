import express from 'express'
import {SignUpUser} from "../controller/user-controller.js";

const router = express.Router()

router.post('/signup',SignUpUser)


export default router;