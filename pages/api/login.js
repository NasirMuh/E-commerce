import User from '../../models/User';
import connectDb from '../../middleware/mongoose';
var CryptoJS = require('crypto-js')
var jwt = require('jsonwebtoken')

const handler = async (req, res) => {

    if (req.method == 'POST') {
        let user = await User.findOne({ "email": req.body.email })
        const bytes = CryptoJS.AES.decrypt(user.password, "secret123");
        let DecryptedPass = bytes.toString(CryptoJS.enc.Utf8);

        if (user) {
            if (req.body.email == user.email && req.body.password == DecryptedPass) {
                var token = jwt.sign({ email: user.email, name: user.name }, 'jwtsecret');
                // console.log("this my token", token)
                res.status(200).json({ success: true, token });
            }
            else {
                res.status(200).json({ success: false, error: "Invalid Credentials" })
            }
        }
        else {
            res.status(200).json({ success: false, error: "User is not exist" })
        }
    }
    else {
        res.status(400).json({ error: "This is not valid Method" })
    }
}

export default connectDb(handler);