import express from 'express';
import { getTopics, createTopic } from '../controller/topic.controller.js';

const satqLoadRoutes = express.Router();

/*satqLoadRoutes.route("/question")
    .post();*/

satqLoadRoutes.route("/topic")
    .get(getTopics)
    .post(createTopic);

export default satqLoadRoutes;