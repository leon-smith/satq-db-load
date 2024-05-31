const QUESTION_QUERY = {
    SELECT_QUESTIONS: 'SELECT * FROM question ORDER BY topic_id DESC LIMIT 100',
    SELECT_QUESTION:  'SELECT * FROM question WHERE id = ? and topic_id = ?',
    CREATE_QUESTION:  'INSERT INTO question(topic_id, content)' + 'VALUES (?,?)',
    UPDATE_QUESTION:   'UPDATE question SET topic_id = ?, content = ?',
    DELETE_QUESTIONS:  'DELETE FROM question WHERE id = ?'                 
};

export default QUESTION_QUERY;