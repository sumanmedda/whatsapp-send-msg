import express from "express"
import dotenv from "dotenv"
import router from "./routes/messageRouter.js"
import whatsAppClient from "./services/WhatsappClient.js"

const app = express()
dotenv.config()
whatsAppClient.initialize()
app.use(express.json())
const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.use("/api/whatsapp-message", router)
