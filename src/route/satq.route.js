import express from 'express';
import { getTopics, createTopic, getTopic, updateTopic, deleteTopic } from '../controller/topic.controller.js';
import { getSubtopics, createSubtopic, getSubtopic, updateSubtopic, deleteSubtopic } from '../controller/subtopic.controller.js';
import { getQuestions, createQuestion, getQuestion, updateQuestion, deleteQuestion } from '../controller/question.controller.js';

const satqLoadRoutes = express.Router();

/*satqLoadRoutes.route("/question")
    .post();*/

satqLoadRoutes.route("/topic")
    .get(getTopics)
    .post(createTopic);

satqLoadRoutes.route("/topic/:id")
    .get(getTopic)
    .put(updateTopic)
    .delete(deleteTopic);

satqLoadRoutes.route("/subtopic")
    .get(getSubtopics)
    .post(createSubtopic);

satqLoadRoutes.route("/subtopic/:id")
    .get(getSubtopic)
    .put(updateSubtopic)
    .delete(deleteSubtopic);

satqLoadRoutes.route("/question")
    .get(getQuestions)
    .post(createQuestion);

satqLoadRoutes.route("/question/:id")
    .get(getQuestion)
    .put(updateQuestion)
    .delete(deleteQuestion);

export default satqLoadRoutes;