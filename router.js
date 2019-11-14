import express from 'express'
const router = express.Router()

// Controllers
import userController from './controllers/userController'

// Default Route
router.get('/', (req, res) => res.send("Enter an existing route, ex. /api/users"))

// User Routes
router.get('/users', userController.index)

export default router;