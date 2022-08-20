import User from '../../models/User';
import connectDb from '../../middleware/mongoose';
var jwt = require('jsonwebtoken')

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let token = req.body.token
        let user = jwt.verify(token, 'jwtsecret')
        let dbuser = await User.findOne({ email: user.email })
        const [name, email, address, pincode, phone] = dbuser
        res.status(200).json({ name, email, address, pincode, phone })
        res.status(200).json({ user : user})
    }
    else {
        res.status(400).json({ error: "Something is wrong!!!" })
    }
}

export default connectDb(handler);