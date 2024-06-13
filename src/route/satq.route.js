import express from 'express';
import { getTopics, createTopic, getTopic, updateTopic, deleteTopic } from '../controller/topic.controller.js';
import { getSubtopics, createSubtopic, getSubtopic, updateSubtopic, deleteSubtopic } from '../controller/subtopic.controller.js';
import { getQuestions, createQuestion, getQuestion, updateQuestion, deleteQuestion } from '../controller/question.controller.js';
import { getItems, createItem, getItem, updateItem, deleteItem } from '../controller/api.controller.js';

const satqLoadRoutes = express.Router();

/*satqLoadRoutes.route("/question")
    .post();*/

satqLoadRoutes.route("/topic")
    // .get(getTopics)
    // .post(createTopic);
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/topic/:id")
    // .get(getTopic)
    // .put(updateTopic)
    // .delete(deleteTopic);
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

satqLoadRoutes.route("/subtopic")
    // .get(getSubtopics)
    // .post(createSubtopic);
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/subtopic/:id")
    // .get(getSubtopic)
    // .put(updateSubtopic)
    // .delete(deleteSubtopic);
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

satqLoadRoutes.route("/question")
    // .get(getQuestions)
    // .post(createQuestion);
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/question/:id")
    // .get(getQuestion)
    // .put(updateQuestion)
    // .delete(deleteQuestion);
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

satqLoadRoutes.route("/answer")
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/answer/:id")
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

satqLoadRoutes.route("/response")
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/response/:id")
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

satqLoadRoutes.route("/user")
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/user/:id")
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

satqLoadRoutes.route("/department")
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/department/:id")
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

satqLoadRoutes.route("/quiz_question")
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/quiz_question/:id")
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

satqLoadRoutes.route("/quiz")
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/quiz/:id")
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

    satqLoadRoutes.route("/correct_answer")
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/correct_answer/:id")
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

satqLoadRoutes.route("/training_video")
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/training_video/:id")
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

satqLoadRoutes.route("/training_doc")
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/training_doc/:id")
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

satqLoadRoutes.route("/training_image")
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/training_image/:id")
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

satqLoadRoutes.route("/content_metadata")
    .get(getItems)
    .post(createItem);

satqLoadRoutes.route("/content_metadata/:id")
    .get(getItem)
    .put(updateItem)
    .delete(deleteItem);

export default satqLoadRoutes;