
import Forgot from "../../models/Forgot"
import User from '../../models/User'

export default async function handler(req, res) {
    if (req.body.sendMail) {
        let token = '123safasdfaszxcvagfsdfgasdfas'
        let forgot = await new Forgot({
            email: req.body.email,
            token: token
        })
        let email = ` we have to sent this email in response to your request to reset your password on TechSol.com
  
  to reset your password  please follow the link below:

  <a href="https://TechSol.com/forgot?token=${token}" > Click here to reset your password </a>

  we recommend to keep your password secure and not share with any one
  
  `
    } else {

    }

    res.status(200).json({ success: true })
}