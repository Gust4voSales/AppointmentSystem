import express  from "express"
import AppointmentController from "./controllers/AppointmentController"

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ msg: "oi" })
})

router.post('/appointment', AppointmentController.store)

export default router