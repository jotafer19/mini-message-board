const { Client } = require("pg")
require("dotenv").config()

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  username TEXT,
  text TEXT,
  date DATE
);

INSERT INTO messages (username, text, date) 
VALUES
  ('Peter', 'Hello world!', '2024-06-01'),
  ('Odin', 'Good morning!', '2024-08-01');
`;

async function main() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    })
    
    await client.connect()
    await client.query(SQL)
    await client.end()
}

main()