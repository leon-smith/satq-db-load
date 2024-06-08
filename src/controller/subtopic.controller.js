import database from '../config/db.config.js';
import Response from '../domain/response.js';
import HttpStatus from '../domain/httpStatus.js';
import logger from '../util/logger.js';
import SUB_TOPIC_QUERY from '../query/subtopic.query.js';

export const getSubtopics = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}`, "fetching sub topics for questions");
    database.query(SUB_TOPIC_QUERY.SELECT_SUBTOPICS, (error, results) => {
        if (!results) {
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'No sub topics found!!'));
        } else {
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'sub topics retrieved', { topics: results }));
        }
    });
}

export const createSubtopic = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, creating sub topic`);
    database.query(SUB_TOPIC_QUERY.CREATE_SUBTOPIC, Object.values(req.body), (error, results) => {
        if (!results) {
            logger.error(error.message);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
                .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status,'Error occured'));
        } else {
            const topic = { id: results.insertedId, ...req.body, created_at: new Date() };
            res.status(HttpStatus.CREATED.code)
                .send(new Response(HttpStatus.CREATED.code, HttpStatus.CREATED.status,'sub topic created', { topic }));
        }
    })
}

export const getSubtopic = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, fetching one sub-topic`);
    database.query(SUB_TOPIC_QUERY.SELECT_SUBTOPIC, [req.params.id], (error, results) => {
        // check the results
        if (results === undefined || error || results.length === 0) {
            // if error received just log the error message
            if (error) {
                logger.error("Something went wrong with the request.");
            }
            // send the corresponding http status back to client
            res.status(HttpStatus.NOT_FOUND.code)
                .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND, 'No sub topic found'));
        } else {
            // Send the results back the the client
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Sub-Topic Retrieved', results[0]));
        }
    });
}

export const updateSubtopic = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, fetching sub-topic to update`);
    database.query(SUB_TOPIC_QUERY.SELECT_SUBTOPIC, [req.params.id], (error, results) => {
        // if nothing comes back
        if (!results[0]) {
            // if error received just log the error message
            if (error) {
                logger.error("Something went wrong with the request.");
            }
            // send the corresponding http status back to client
            res.status(HttpStatus.NOT_FOUND.code)
                .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND, 'No sub-topic found'));
        } else {
            // update the topic from client data
            logger.info(`${req.method} ${req.originalUrl}, updating topic`);
            database.query(SUB_TOPIC_QUERY.UPDATE_SUBTOPIC, [...Object.values(req.body), req.params.id], (error, results) => {
                // no errors
                if (!error) {
                    res.status(HttpStatus.OK.code)
                    .send(new Response(HttpStatus.OK, HttpStatus.OK.status,'sub topic Updated', { id: req.params.id, ...req.body}));
                } else {
                    logger.error(error.message);
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
                        .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status,'Error occurred'));
                }
            })
        }
    });
}

export const deleteSubtopic = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl},  deleting sub toic`);
    database.query(SUB_TOPIC_QUERY.DELETE_SUBTOPICS, [req.params.id], (error, results) => {
        if (results.affectedRows > 0) {
            res.status(HttpStatus.OK.code)
            .send(new Response(HttpStatus.OK, HttpStatus.OK.status,'sub topic deleted', results[0]));
        } else {
            res.status(HttpStatus.NOT_FOUND.code)
            .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status,`sub topic by id ${req.params.id} was not found.`));
        
        }
    });
}