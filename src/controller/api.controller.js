import database from '../config/db.config.js';
import Response from '../domain/response.js';
import HttpStatus from '../domain/httpStatus.js';
import logger from '../util/logger.js';
import determineTableQuery from '../util/determineTableQuery.js';

export const getItems = (req, res) => {
    var arr = determineTableQuery(req.originalUrl, "allitems");
    var tableName = arr[0];
    var QUERY = arr[1];
    logger.info(`${req.method} ${req.originalUrl}`, `fetching ${tableName}s`);
    database.query(QUERY, (error, results) => {
        if (!results) {
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `No ${tableName} found!!!`));
        } else {
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `${tableName} retrieved`, {tableName: results }));
        }
    });
}

export const createItem = (req, res) => {
    var arr = determineTableQuery(req.originalUrl, req.method);
    var tableName = arr[0];
    var QUERY = arr[1];
    logger.info(`${req.method} ${req.originalUrl}, creating ${tableName}`);
    database.query(QUERY, Object.values(req.body), (error, results, tableName) => {
        if (!results) {
            logger.error(error.message);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
                .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status,'Error occured'));
        } else {
            const item = { id: results.insertedId, ...req.body, created_at: new Date() };
            res.status(HttpStatus.CREATED.code)
                .send(new Response(HttpStatus.CREATED.code, HttpStatus.CREATED.status,`${tableName} created`, { item }));
        }
    })
}

export const getItem = (req, res) => {
    var arr = determineTableQuery(req.originalUrl, req.method);
    var tableName = arr[0];
    var QUERY = arr[1];
    logger.info(`${req.method} ${req.originalUrl}, fetching one ${tableName}`);
    database.query(QUERY, [req.params.id], (error, results) => {
        // check the results
        if (results === undefined || error || results.length === 0) {
            // if error received just log the error message
            if (error) {
                logger.error("Something went wrong with the request.");
            }
            // send the corresponding http status back to client
            res.status(HttpStatus.NOT_FOUND.code)
                .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND, `No ${tableName} found`));
        } else {
            // Send the results back the the client
            res.status(HttpStatus.OK.code)
                .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, `${tableName} Retrieved`, results[0]));
        }
    });
}

export const updateItem = (req, res) => {
    var arr = determineTableQuery(req.originalUrl, "GET");
    var tableName = arr[0];
    var QUERY = arr[1];
    logger.info(`${req.method} ${req.originalUrl}, fetching ${tableName} to update`);
    database.query(QUERY, [req.params.id], (error, results) => {
        // if nothing comes back
        if (!results[0]) {
            // if error received just log the error message
            if (error) {
                logger.error("Something went wrong with the request.");
            }
            // send the corresponding http status back to client
            res.status(HttpStatus.NOT_FOUND.code)
                .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND, `No ${tableName} found`));
        } else {
            // update the question from client data
            var arr = determineTableQuery(req.originalUrl, req.method);
            var tableName = arr[0];
            var QUERY = arr[1];
            logger.info(`${req.method} ${req.originalUrl}, updating ${tableName}`);
            database.query(QUERY, [...Object.values(req.body), req.params.id], (error, results) => {
                // no errors
                if (!error) {
                    res.status(HttpStatus.OK.code)
                    .send(new Response(HttpStatus.OK, HttpStatus.OK.status, `${tableName} updated`, { id: req.params.id, ...req.body}));
                } else {
                    logger.error(error.message);
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
                        .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status,'Error occurred'));
                }
            })
        }
    });
}

export const deleteItem = (req, res) => {
    var arr = determineTableQuery(req.originalUrl, req.method);
    var tableName = arr[0];
    var QUERY = arr[1];
    logger.info(`${req.method} ${req.originalUrl},  deleting ${tableName}`);
    database.query(QUERY, [req.params.id], (error, results) => {
        if (results.affectedRows > 0) {
            res.status(HttpStatus.OK.code)
            .send(new Response(HttpStatus.OK, HttpStatus.OK.status,`${tableName} deleted`, results[0]));
        } else {
            res.status(HttpStatus.NOT_FOUND.code)
            .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status,`${tableName} by id ${req.params.id} was not found.`));
        
        }
    });
}