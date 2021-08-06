import express  from "express"
import AppointmentController from "./controllers/AppointmentController"

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ msg: "oi" })
})

router.post('/appointment', AppointmentController.store)
router.get('/appointment', AppointmentController.index)
router.get('/appointment/:id', AppointmentController.show)
router.delete('/appointment/:id', AppointmentController.destroy)

export default router