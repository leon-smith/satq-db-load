const CONTENT_METADATA_QUERY = {
    SELECT_CONTENT_METADATAS: 'SELECT * FROM content_metadata ORDER BY id DESC LIMIT 100',
    SELECT_CONTENT_METADATA:  'SELECT * FROM content_metadata WHERE id = ?',
    CREATE_CONTENT_METADATA:  'INSERT INTO content_metadata (topic_id, title, description, content_type)' + 'VALUES (?,?,?,?)',
    UPDATE_CONTENT_METADATA:  'UPDATE content_metadata SET topic_id = ?, title = ?, description = ?, content_type = ? WHERE id = ?',
    DELETE_CONTENT_METADATAS: 'DELETE FROM content_metadata WHERE id = ?'                 
};

export default CONTENT_METADATA_QUERY;