const QUIZ_QUERY = {
    SELECT_QUIZS: 'SELECT * FROM quiz ORDER BY id DESC LIMIT 100',
    SELECT_QUIZ:  'SELECT * FROM quiz WHERE id = ?',
    CREATE_QUIZ:  'INSERT INTO quiz (start_time, end_time, complete, score)' + 'VALUES (?,?,?,?)',
    UPDATE_QUIZ:  'UPDATE quiz SET start_time = ?, end_time = ?, complete = ?, score = ? WHERE id = ?',
    DELETE_QUIZS: 'DELETE FROM quiz WHERE id = ?'                 
};

export default QUIZ_QUERY;