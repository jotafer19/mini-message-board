const express = require("express");
const router = express.Router();

const { v4: uuidv4 } = require('uuid');

const messages = [
    {
        id: uuidv4(),
        text: "Hi there!",
        user: "Armando",
        added: new Date().toDateString()
    },
    {
        id: uuidv4(),
        text: "Hello World!",
        user: "Charles",
        added: new Date().toDateString()
    }
];
  

router.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages})
})

router.get("/message/:id", (req, res) => {
    const id = req.params.id;
    const showMessage = messages.find(message => message.id === id)
    res.render("message", { message: showMessage})
})

router.get("/new", (req, res) => {
    res.render("form")
})

router.post("/new", (req, res) => {
    const { messageUser, messageText } = req.body;
    const messageId = messages.length;
    messages.push({ id: uuidv4(), text: messageText, user: messageUser, added: new Date().toDateString() });
    res.redirect("/");
})

module.exports = router;