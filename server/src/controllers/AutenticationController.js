const { User } = require('../models')

module.exports = {
    async register(req, res) {
        console.log(req.body)
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            //email exists
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    }
}