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

export default {
    index
}