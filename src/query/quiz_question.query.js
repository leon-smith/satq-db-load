const QUIZ_QUESTION_QUERY = {
    SELECT_QUIZ_QUESTIONS: 'SELECT * FROM quiz_question ORDER BY quiz_id DESC LIMIT 100',
    SELECT_QUIZ_QUESTION:  'SELECT * FROM quiz_question WHERE quiz_id = ?',
    CREATE_QUIZ_QUESTION:  'INSERT INTO quiz_question (quiz_id, question_id)' + 'VALUES (?,?)',
    UPDATE_QUIZ_QUESTION:  'UPDATE quiz_question SET question_id = ? WHERE quiz_id = ?',
    DELETE_QUIZ_QUESTIONS: 'DELETE FROM quiz_question WHERE quiz_id = ?'                 
};

export default QUIZ_QUESTION_QUERY;