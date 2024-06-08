const SUB_TOPIC_QUERY = {
    SELECT_SUBTOPICS: 'SELECT * FROM sub_topic ORDER BY id DESC LIMIT 100',
    SELECT_SUBTOPIC:  'SELECT * FROM sub_topic WHERE id = ?',
    CREATE_SUBTOPIC:  'INSERT INTO sub_topic (topic_id, name) ' + 'VALUES (?,?)',
    UPDATE_SUBTOPIC:  'UPDATE sub_topic SET name = ? where id = ?',
    DELETE_SUBTOPICS: 'DELETE FROM sub_topic WHERE id = ?'                 
};

export default SUB_TOPIC_QUERY;