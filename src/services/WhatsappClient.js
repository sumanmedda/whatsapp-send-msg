const { Client, LocalAuth } = require("whatsapp-web.js")
const qrcode = require("qrcode-terminal")

const whatsAppClient = new Client({
  authStrategy: new LocalAuth(),
})

whatsAppClient.on("qr", (qr) => {
  qrcode.generate(qr, { small: true })
})

whatsAppClient.on("ready", () => {
  console.log("Client is ready!")
})

whatsAppClient.on("message", async (msg) => {
  try {
    if (msg.from != "status@broadcast") {
      const contact = await msg.getContact()
      console.log(contact, " : ", msg.body)
    }
  } catch (error) {
    console.log("Some Error Occured : ", error)
  }
})

module.exports = whatsAppClient
