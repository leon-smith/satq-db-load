const RESPONSE_QUERY = {
    SELECT_RESPONSES: 'SELECT * FROM response ORDER BY id DESC LIMIT 100',
    SELECT_RESPONSE:  'SELECT * FROM response WHERE id = ?',
    CREATE_RESPONSE:  'INSERT INTO response (user_id, quiz_id, question_id, answer_id, resp_time) ' + 'VALUES (?,?,?,?,?)',
    UPDATE_RESPONSE:  'UPDATE response SET user_id = ?, quiz_id = ?, question_id = ?, answer_id = ?, resp_time = ? where id = ?',
    DELETE_RESPONSES: 'DELETE FROM response WHERE id = ?'                 
};

export default RESPONSE_QUERY;