const CORRECT_ANSWER_QUERY = {
    SELECT_CORRECT_ANSWERS: 'SELECT * FROM correct_answer ORDER BY question_id DESC LIMIT 100',
    SELECT_CORRECT_ANSWER:  'SELECT * FROM correct_answer WHERE question_id = ?',
    CREATE_CORRECT_ANSWER:  'INSERT INTO correct_answer (question_id, answer_id)' + 'VALUES (?,?)',
    UPDATE_CORRECT_ANSWER:  'UPDATE correct_answer SET answer_id = ? WHERE question_id = ?',
    DELETE_CORRECT_ANSWERS: 'DELETE FROM correct_answer WHERE question_id = ?'                 
};

export default CORRECT_ANSWER_QUERY;