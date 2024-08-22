const pool = require("./pool")

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows;
}

async function insertMessage(username, text, date) {
    await pool.query("INSERT INTO messages (username, text, date) VALUES ($1, $2, $3)", [username, text, date])
}

async function getMessage(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE messages.id = $1", [id])
    return rows[0];
}

module.exports = {
    getAllMessages,
    insertMessage,
    getMessage
}