import express  from "express"
import { getRepository } from "typeorm"
import AppointmentController from "./controllers/AppointmentController"
import authFirebase from "./middlewares/firebaseAuth"

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ msg: "oi" })
})

// USER ROUTES


// APPOINTMENT ROUTES
router.post('/appointment', authFirebase, AppointmentController.store)
router.get('/appointment', authFirebase, AppointmentController.index)
router.get('/appointment/:id', AppointmentController.show)
router.delete('/appointment/:id', AppointmentController.destroy)

export default router