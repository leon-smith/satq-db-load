const USER_QUERY = {
    SELECT_USERS: 'SELECT * FROM user ORDER BY id DESC LIMIT 100',
    SELECT_USER:  'SELECT * FROM user WHERE id = ?',
    CREATE_USER:  'INSERT INTO user (department_id, first_name, last_name, email, pass_hash, registration_date, passed, pass_date) ' + 'VALUES (?,?,?,?,?,?,?,?)',
    UPDATE_USER:  'UPDATE user SET department_id = ?, first_name = ?, last_name = ?, email = ?, pass_hash = ?, registration_date = ?, passed = ?, pass_date = ? where id = ?',
    DELETE_USERS: 'DELETE FROM user WHERE id = ?'                 
};

export default USER_QUERY;