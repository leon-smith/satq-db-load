const TRAINING_DOC_QUERY = {
    SELECT_TRAINING_DOCS: 'SELECT * FROM training_doc ORDER BY id DESC LIMIT 100',
    SELECT_TRAINING_DOC:  'SELECT * FROM training_doc WHERE id = ?',
    CREATE_TRAINING_DOC:  'INSERT INTO training_doc (content_id,file_path)' + 'VALUES (?,?)',
    UPDATE_TRAINING_DOC:  'UPDATE training_doc SET content_id = ?, file_path = ? WHERE id = ?',
    DELETE_TRAINING_DOCS: 'DELETE FROM training_doc WHERE id = ?'                 
};

export default TRAINING_DOC_QUERY;