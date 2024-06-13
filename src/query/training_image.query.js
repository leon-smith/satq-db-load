const TRAINING_IMAGE_QUERY = {
    SELECT_TRAINING_IMAGES: 'SELECT * FROM training_image ORDER BY id DESC LIMIT 100',
    SELECT_TRAINING_IMAGE:  'SELECT * FROM training_image WHERE id = ?',
    CREATE_TRAINING_IMAGE:  'INSERT INTO training_image (content_id, alt_text, file_path)' + 'VALUES (?,?,?)',
    UPDATE_TRAINING_IMAGE:  'UPDATE training_image SET content_id = ?, alt_text = ?, file_path = ? WHERE id = ?',
    DELETE_TRAINING_IMAGES: 'DELETE FROM training_image WHERE id = ?'                 
};

export default TRAINING_IMAGE_QUERY;

