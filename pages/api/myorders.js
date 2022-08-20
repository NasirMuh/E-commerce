import connectionDb from '../../middleware/mongoose'
import Order from '../../models/Order';
import jsonwebtoken from 'jsonwebtoken'

const handler = async (req, res) => {
    const token = req.body.token
    const data = jsonwebtoken.verify(token, "jwtsecret")
    let orders = await Order.find({ email: data.email })
    res.status(200).json({ orders })
}

export default connectionDb(handler);