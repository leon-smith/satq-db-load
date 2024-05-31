import express from "express";
import ip from 'ip';
import dotenv from 'dotenv';
import cors from 'cors';
import Response from './domain/response.js';
import HttpStatus from './domain/httpStatus.js';
import satqLoadRoutes from './route/satq.route.js';
import logger from './util/logger.js';

// get environment variables used to connect to db and environment determination
dotenv.config();

// if no port set use default port
const DEFAULT_PORT = process.env.DEFAULT_PORT;
const PORT = process.env.SERVER_PORT || DEFAULT_PORT;

// start express engine
const app = express();

// setup cors configuration
app.use(cors({ origin: process.env.CORS_URL }));

// setup express to send and receive json
app.use(express.json());

// initial route
app.use('/satq-load-api', satqLoadRoutes);

// test route 
app.get('/', (req, res) => {res.send( 
    // using new response class
    new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Patient API, v1.0.0 - All Systems Go', {
        questions: { "question": {
                "id": 1,
                "topic_id": "Test",
                "content": "What does 1 + 1 = "
            }
        }
    })
)});

// catch invalid routes
app.all('*', (req, res) => res.status(HttpStatus.NOT_FOUND.code)
    .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'Route does not exist on the server.')))
app.listen(PORT, () => logger.info(`Server running on: ${ip.address()}:${PORT}`));