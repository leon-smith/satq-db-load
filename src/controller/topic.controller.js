import database from '../config/db.config.js';
import Response from '../domain/response.js';
import HttpStatus from '../domain/httpStatus.js';
import logger from '../util/logger.js';
import TOPIC_QUERY from '../query/topic.query.js';

export const getTopics = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}`, "fetching topics for questions");
    database.query(TOPIC_QUERY.SELECT_TOPICS, (error, results) => {
        if (!results) {
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'No topics found!!'));
        } else {
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Topics retrieved', { topics: results }));
        }
    });
}

export const createTopic = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, creating topic`);
    database.query(TOPIC_QUERY.CREATE_TOPIC, Object.values(req.body), (error, results) => {
        if (!results) {
            logger.error(error.message);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
                .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status,'Error occured'));
        } else {
            const topic = { id: results.insertedId, ...req.body, created_at: new Date() };
            res.status(HttpStatus.CREATED.code)
                .send(new Response(HttpStatus.CREATED.code, HttpStatus.CREATED.status,'topic created', { topic }));
        }
    })
}