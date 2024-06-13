const ANSWER_QUERY = {
    SELECT_ANSWERS: 'SELECT * FROM answer ORDER BY id DESC LIMIT 100',
    SELECT_ANSWER:  'SELECT * FROM answer WHERE id = ?',
    CREATE_ANSWER:  'INSERT INTO answer (question_id, content)' + 'VALUES (?,?)',
    UPDATE_ANSWER:   'UPDATE answer SET content = ? WHERE id = ?',
    DELETE_ANSWERS:  'DELETE FROM answer WHERE id = ?'                 
};

export default ANSWER_QUERY;