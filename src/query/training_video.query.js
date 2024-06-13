const TRAINING_VIDEO_QUERY = {
    SELECT_TRAINING_VIDEOS: 'SELECT * FROM training_video ORDER BY id DESC LIMIT 100',
    SELECT_TRAINING_VIDEO:  'SELECT * FROM training_video WHERE id = ?',
    CREATE_TRAINING_VIDEO:  'INSERT INTO training_video (content_id, duration_in_seconds, file_path)' + 'VALUES (?,?,?)',
    UPDATE_TRAINING_VIDEO:  'UPDATE training_video SET content_id = ?, duration_in_seconds = ?, file_path = ? WHERE id = ?',
    DELETE_TRAINING_VIDEOS: 'DELETE FROM training_video WHERE id = ?'                 
};

export default TRAINING_VIDEO_QUERY;