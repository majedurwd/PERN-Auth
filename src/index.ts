import http from "http";
import app from "./app";
import { env } from "./config";

const PORT = env.port || 3000;
const server = http.createServer(app);
const url = `http://localhost:${PORT}`;


// Start server
server.listen(PORT, () => {
    console.log(`✅ The server is running on ${url}`);
});