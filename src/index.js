require('dotenv').config({ path: '.env' });

const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO: cookie JWT
// TODO: populate current user

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL,
        },
    },
    deets => {
        console.log(`Server is running on http://localhost:${deets.port}`);
    },
);
