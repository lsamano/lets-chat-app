import User from '../models/user';

const index = (req, res) => {
    User.find((error, users) => {
        if (error) {
            return res.json({ success: false, error: error })
        } else {
            return res.json({ success: true, users: users })
        }
    })
}

const show = (req, res) => {
    User.findById(req.params.id, (error, user) => {
        if (error) {
            return res.json({ success: false, error: error })
        } else {
            return res.json({ success: true, user: user })
        }
    })
}

export default {
    index,
    show
}