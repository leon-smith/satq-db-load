const TOPIC_QUERY = {
    SELECT_TOPICS: 'SELECT * FROM topic ORDER BY id DESC LIMIT 100',
    SELECT_TOPIC:  'SELECT * FROM topic WHERE id = ?',
    CREATE_TOPIC:  'INSERT INTO topic(name)' + 'VALUES (?)',
    UPDATE_TOPIC:  'UPDATE topic SET name = ?',
    DELETE_TOPICS: 'DELETE FROM topic WHERE id = ?'                 
};

export default TOPIC_QUERY;