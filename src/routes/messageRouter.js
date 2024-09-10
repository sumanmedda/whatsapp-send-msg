const express = require("express")
const router = express.Router()
const whatsAppClient = require("../services/WhatsappClient")

router.get("/get", (req, res) => {
  res.send("Hello World")
})

router.post("/send-message", (req, res) => {
  try {
    whatsAppClient.sendMessage(req.body.phoneNumber, req.body.message)
    return res.status(200).json({
      message: "Message sent successfully!",
      data: [{ phoneNumber: req.body.phoneNumber, message: req.body.message }],
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

module.exports = router
