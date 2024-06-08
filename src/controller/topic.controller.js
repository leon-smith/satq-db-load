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

export const getTopic = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, fetching one topic`);
    database.query(TOPIC_QUERY.SELECT_TOPIC, [req.params.id], (error, results) => {
        // check the results
        if (results === undefined || error) {
            // if error received just log the error message
            if (error) {
                logger.error("Something went wrong with the request.");
            }
            // send the corresponding http status back to client
            res.status(HttpStatus.NOT_FOUND.code)
                .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND, 'No topic found'));
        } else {
            // Send the results back the the client
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Topic Retrieved', results[0]));
        }
    });
}

export const updateTopic = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, fetching topic to update`);
    database.query(TOPIC_QUERY.SELECT_TOPIC, [req.params.id], (error, results) => {
        // if nothing comes back
        if (!results[0]) {
            // if error received just log the error message
            if (error) {
                logger.error("Something went wrong with the request.");
            }
            // send the corresponding http status back to client
            res.status(HttpStatus.NOT_FOUND.code)
                .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND, 'No topic found'));
        } else {
            // update the topic from client data
            logger.info(`${req.method} ${req.originalUrl}, updating topic`);
            database.query(TOPIC_QUERY.UPDATE_TOPIC, [...Object.values(req.body), req.params.id], (error, results) => {
                // no errors
                if (!error) {
                    res.status(HttpStatus.OK.code)
                    .send(new Response(HttpStatus.OK, HttpStatus.OK.status,'topic Updated', { id: req.params.id, ...req.body}));
                } else {
                    logger.error(error.message);
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
                        .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status,'Error occurred'));
                }
            })
        }
    });
}

export const deleteTopic = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl},  deleting toic`);
    database.query(TOPIC_QUERY.DELETE_TOPICS, [req.params.id], (error, results) => {
        if (results.affectedRows > 0) {
            res.status(HttpStatus.OK.code)
            .send(new Response(HttpStatus.OK, HttpStatus.OK.status,'topic deleted', results[0]));
        } else {
            res.status(HttpStatus.NOT_FOUND.code)
            .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status,`topic by id ${req.params.id} was not found.`));
        
        }
    });
}