import QUESTION_QUERY from '../query/question.query.js';
import ANSWER_QUERY from '../query/answer.query.js';
import SUB_TOPIC_QUERY from '../query/subtopic.query.js';
import TOPIC_QUERY from '../query/topic.query.js';
import RESPONSE from '../query/response.query.js';
import USER from '../query/user.query.js';
import DEPARTMENT from '../query/department.query.js';
import QUIZ_QUESTION from '../query/quiz_question.query.js'
import QUIZ from '../query/quiz.query.js';
import CORRECT_ANSWER_QUERY from '../query/correct_answer.query.js';
import TRAINING_VIDEO from '../query/training_video.query.js';
import TRAINING_DOC from '../query/training_doc.query.js';
import TRAINING_IMAGE from '../query/training_image.query.js';
import CONTENT_METADATA from '../query/content_metadata.query.js';

function determineTableQuery(requestUri, apiMethod) {
   
    let urlText = requestUri;
    const arr = urlText.split("/");
    let tableName = arr[2]
    var QUERY;
    var data = [];
    data.push(tableName);

    switch(tableName) {
        case "answer":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = ANSWER_QUERY.SELECT_ANSWERS;
                    break;
                case "get":
                    QUERY = ANSWER_QUERY.SELECT_ANSWER;
                    break;
                case "post":
                    QUERY = ANSWER_QUERY.CREATE_ANSWER;
                    break;
                case "put":
                    QUERY = ANSWER_QUERY.UPDATE_ANSWER;
                    break;
                case "delete":
                    QUERY = ANSWER_QUERY.DELETE_ANSWERS;
                    break;
                default:
                    QUERY = "";
            }
            break;

        case "question":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = QUESTION_QUERY.SELECT_QUESTIONS;
                    break;
                case "get":
                    QUERY = QUESTION_QUERY.SELECT_QUESTION;
                    break;
                case "post":
                    QUERY = QUESTION_QUERY.CREATE_QUESTION;
                    break;
                case "put":
                    QUERY = QUESTION_QUERY.UPDATE_QUESTION;
                    break;
                case "delete":
                    QUERY = QUESTION_QUERY.DELETE_QUESTIONS;
                    break;
                default:
                    QUERY = "";
            }
            break;

        case "topic":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = TOPIC_QUERY.SELECT_TOPICS;
                    break;
                case "get":
                    QUERY = TOPIC_QUERY.SELECT_TOPIC;
                    break;
                case "post":
                    QUERY = TOPIC_QUERY.CREATE_TOPIC;
                    break;
                case "put":
                    QUERY = TOPIC_QUERY.UPDATE_TOPIC;
                    break;
                case "delete":
                    QUERY = TOPIC_QUERY.DELETE_TOPICS;
                    break;
                default:
                    QUERY = "";
            }
            break;
        case "subtopic":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = SUB_TOPIC_QUERY.SELECT_SUBTOPICS;
                    break;
                case "get":
                    QUERY = SUB_TOPIC_QUERY.SELECT_SUBTOPIC;
                    break;
                case "post":
                    QUERY = SUB_TOPIC_QUERY.CREATE_SUBTOPIC;
                    break;
                case "put":
                    QUERY = SUB_TOPIC_QUERY.UPDATE_SUBTOPIC;
                    break;
                case "delete":
                    QUERY = SUB_TOPIC_QUERY.DELETE_SUBTOPICS;
                    break;
                default:
                    QUERY = "";
            }
            break;
        case "response":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = RESPONSE_QUERY.SELECT_RESPONSES;
                    break;
                case "get":
                    QUERY = RESPONSE_QUERY.SELECT_RESPONSE;
                    break;
                case "post":
                    QUERY = RESPONSE_QUERY.CREATE_RESPONSE;
                    break;
                case "put":
                    QUERY = RESPONSE_QUERY.UPDATE_RESPONSE;
                    break;
                case "delete":
                    QUERY = RESPONSE_QUERY.DELETE_RESPONSES;
                    break;
                default:
                    QUERY = "";
            }
            break;
        case "user":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = USER_QUERY.SELECT_USERS;
                    break;
                case "get":
                    QUERY = USER_QUERY.SELECT_USER;
                    break;
                case "post":
                    QUERY = USER_QUERY.CREATE_USER;
                    break;
                case "put":
                    QUERY = USER_QUERY.UPDATE_USER;
                    break;
                caseUSER_
                    QUERY = USER_QUERY.DELETE_USERS;
                    break;
                USER
                    QUERY = "";
            }
            break;
        case "department":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = DEPARTMENT_QUERY.SELECT_DEPARTMENTS;
                    break;
                case "get":
                    QUERY = DEPARTMENT_QUERY.SELECT_DEPARTMENT;
                    break;
                case "post":
                    QUERY = DEPARTMENT_QUERY.CREATE_DEPARTMENT;
                    break;
                case "put":
                    QUERY = DEPARTMENT_QUERY.UPDATE_DEPARTMENT;
                    break;
                case "delete":
                    QUERY = DEPARTMENT_QUERY.DELETE_DEPARTMENTS;
                    break;
                default:
                    QUERY = "";
            }
            break;
        case "quiz":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = QUIZ_QUERY.SELECT_QUIZS;
                    break;
                case "get":
                    QUERY = QUIZ_QUERY.SELECT_QUIZ;
                    break;
                case "post":
                    QUERY = QUIZ_QUERY.CREATE_QUIZ;
                    break;
                case "put":
                    QUERY = QUIZ_QUERY.UPDATE_QUIZ;
                    break;
                case "delete":
                    QUERY = QUIZ_QUERY.DELETE_QUIZS;
                    break;
                default:
                    QUERY = "";
            }
            break;
        case "quiz_question":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = QUIZ_QUESTION_QUERY.SELECT_QUIZ_QUESTIONS;
                    break;
                case "get":
                    QUERY = QUIZ_QUESTION_QUERY.SELECT_QUIZ_QUESTION;
                    break;
                case "post":
                    QUERY = QUIZ_QUESTION_QUERY.CREATE_QUIZ_QUESTION;
                    break;
                case "put":
                    QUERY = QUIZ_QUESTION_QUERY.UPDATE_QUIZ_QUESTION;
                    break;
                case "delete":
                    QUERY = QUIZ_QUESTION_QUERY.DELETE_QUIZ_QUESTIONS;
                    break;
                default:
                    QUERY = "";
            }
            break;
        case "correct_answer":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = CORRECT_ANSWER_QUERY.SELECT_CORRECT_ANSWERS;
                    break;
                case "get":
                    QUERY = CORRECT_ANSWER_QUERY.SELECT_CORRECT_ANSWER;
                    break;
                case "post":
                    QUERY = CORRECT_ANSWER_QUERY.CREATE_CORRECT_ANSWER;
                    break;
                case "put":
                    QUERY = CORRECT_ANSWER_QUERY.UPDATE_CORRECT_ANSWER;
                    break;
                case "delete":
                    QUERY = CORRECT_ANSWER_QUERY.DELETE_CORRECT_ANSWERS;
                    break;
                default:
                    QUERY = "";
            }
            break;
        case "training_video":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = TRAINING_VIDEO_QUERY.SELECT_TRAINING_VIDEOS;
                    break;
                case "get":
                    QUERY = TRAINING_VIDEO_QUERY.SELECT_TRAINING_VIDEO;
                    break;
                case "post":
                    QUERY = TRAINING_VIDEO_QUERY.CREATE_TRAINING_VIDEO;
                    break;
                case "put":
                    QUERY = TRAINING_VIDEO_QUERY.UPDATE_TRAINING_VIDEO;
                    break;
                case "delete":
                    QUERY = TRAINING_VIDEO_QUERY.DELETE_TRAINING_VIDEOS;
                    break;
                default:
                    QUERY = "";
            }
            break;
        case "training_doc":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = TRAINING_DOC_QUERY.SELECT_TRAINING_DOCS;
                    break;
                case "get":
                    QUERY = TRAINING_DOC_QUERY.SELECT_TRAINING_DOC;
                    break;
                case "post":
                    QUERY = TRAINING_DOC_QUERY.CREATE_TRAINING_DOC;
                    break;
                case "put":
                    QUERY = TRAINING_DOC_QUERY.UPDATE_TRAINING_DOC;
                    break;
                case "delete":
                    QUERY = TRAINING_DOC_QUERY.DELETE_TRAINING_DOCS;
                    break;
                default:
                    QUERY = "";
            }
            break;
        case "training_image":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = TRAINING_IMAGE_QUERY.SELECT_TRAINING_IMAGES;
                    break;
                case "get":
                    QUERY = TRAINING_IMAGE_QUERY.SELECT_TRAINING_IMAGE;
                    break;
                case "post":
                    QUERY = TRAINING_IMAGE_QUERY.CREATE_TRAINING_IMAGE;
                    break;
                case "put":
                    QUERY = TRAINING_IMAGE_QUERY.UPDATE_TRAINING_IMAGE;
                    break;
                case "delete":
                    QUERY = TRAINING_IMAGE_QUERY.DELETE_TRAINING_IMAGES;
                    break;
                default:
                    QUERY = "";
            }
            break;
        case "content_metadata":
            switch(apiMethod.toLowerCase()) {
                case "allitems":
                    QUERY = CONTENT_METADATA_QUERY.SELECT_CONTENT_METADATAS;
                    break;
                case "get":
                    QUERY = CONTENT_METADATA_QUERY.SELECT_CONTENT_METADATA;
                    break;
                case "post":
                    QUERY = CONTENT_METADATA_QUERY.CREATE_CONTENT_METADATA;
                    break;
                case "put":
                    QUERY = CONTENT_METADATA_QUERY.UPDATE_CONTENT_METADATA;
                    break;
                case "delete":
                    QUERY = CONTENT_METADATA_QUERY.DELETE_CONTENT_METADATAS;
                    break;
                default:
                    QUERY = "";
            }
            break;
        default:
            QUERY = "";
    }

    data.push(QUERY);
    return data;
}

export default determineTableQuery;