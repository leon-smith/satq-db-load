import database from '../config/db.config.js';
import Response from '../domain/response.js';
import HttpStatus from '../domain/httpStatus.js';
import logger from '../util/logger.js';
import QUESTION_QUERY from '../query/question.query.js';

export const getQuestions = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}`, "fetching quiz questions");
    database.query(QUESTION_QUERY.SELECT_QUESTIONS, (error, results) => {
        if (!results) {
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'No questions found!!'));
        } else {
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'questions retrieved', { topics: results }));
        }
    });
}

export const createQuestion = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, creating question`);
    database.query(QUESTION_QUERY.CREATE_QUESTION, Object.values(req.body), (error, results) => {
        if (!results) {
            logger.error(error.message);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
                .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status,'Error occured'));
        } else {
            const question = { id: results.insertedId, ...req.body, created_at: new Date() };
            res.status(HttpStatus.CREATED.code)
                .send(new Response(HttpStatus.CREATED.code, HttpStatus.CREATED.status,'question created', { question }));
        }
    })
}

export const getQuestion = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, fetching one question`);
    database.query(QUESTION_QUERY.SELECT_QUESTION, [req.params.id], (error, results) => {
        // check the results
        if (results === undefined || error || results.length === 0) {
            // if error received just log the error message
            if (error) {
                logger.error("Something went wrong with the request.");
            }
            // send the corresponding http status back to client
            res.status(HttpStatus.NOT_FOUND.code)
                .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND, 'No question found'));
        } else {
            // Send the results back the the client
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'question Retrieved', results[0]));
        }
    });
}

export const updateQuestion = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, fetching question to update`);
    database.query(QUESTION_QUERY.SELECT_QUESTION, [req.params.id], (error, results) => {
        // if nothing comes back
        if (!results[0]) {
            // if error received just log the error message
            if (error) {
                logger.error("Something went wrong with the request.");
            }
            // send the corresponding http status back to client
            res.status(HttpStatus.NOT_FOUND.code)
                .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND, 'No question found'));
        } else {
            // update the question from client data
            logger.info(`${req.method} ${req.originalUrl}, updating question`);
            database.query(QUESTION_QUERY.UPDATE_QUESTION, [...Object.values(req.body), req.params.id], (error, results) => {
                // no errors
                if (!error) {
                    res.status(HttpStatus.OK.code)
                    .send(new Response(HttpStatus.OK, HttpStatus.OK.status,'question Updated', { id: req.params.id, ...req.body}));
                } else {
                    logger.error(error.message);
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
                        .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status,'Error occurred'));
                }
            })
        }
    });
}

export const deleteQuestion = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl},  deleting question`);
    database.query(QUESTION_QUERY.DELETE_QUESTIONS, [req.params.id], (error, results) => {
        if (results.affectedRows > 0) {
            res.status(HttpStatus.OK.code)
            .send(new Response(HttpStatus.OK, HttpStatus.OK.status,'question deleted', results[0]));
        } else {
            res.status(HttpStatus.NOT_FOUND.code)
            .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status,`question by id ${req.params.id} was not found.`));
        
        }
    });
}