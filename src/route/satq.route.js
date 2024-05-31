import express from 'express';

const satqLoadRoutes = express.Router();

satqLoadRoutes.route("/question")
    .post();

export default satqLoadRoutes;