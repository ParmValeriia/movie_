import { createPool } from "mysql2"

export default createPool({
    host: "localhost",
    user: "root",
    password:"root",
    database: "platform",
    waitForConnections: true,
    connectAttributes: 10,
    queueLimit: 0
})
