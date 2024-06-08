const QUESTION_QUERY = {
    SELECT_QUESTIONS: 'SELECT * FROM question ORDER BY id DESC LIMIT 100',
    SELECT_QUESTION:  'SELECT * FROM question WHERE id = ?',
    CREATE_QUESTION:  'INSERT INTO question(topic_id, sub_topic_id, content)' + 'VALUES (?,?,?)',
    UPDATE_QUESTION:   'UPDATE question SET content = ? WHERE id = ?',
    DELETE_QUESTIONS:  'DELETE FROM question WHERE id = ?'                 
};

export default QUESTION_QUERY;