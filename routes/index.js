const express = require("express");
const router = express.Router();
const queryDB = require("../db/query")

router.get("/", async (req, res) => {
    const messages = await queryDB.getAllMessages()
    res.render("index", { title: "Mini Messageboard", messages: messages})
})

router.get("/message/:id", async (req, res) => {
    const id = req.params.id;
    const showMessage = await queryDB.getMessage(id)
    console.log(showMessage)
    res.render("message", { message: showMessage})
})

router.get("/new", (req, res) => {
    res.render("form")
})

router.post("/new", async (req, res) => {
    const { messageUser, messageText } = req.body;
    await queryDB.insertMessage(messageUser, messageText, new Date().toISOString().split("T")[0])
    res.redirect("/");
})

module.exports = router;