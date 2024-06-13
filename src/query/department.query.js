const DEPARTMENT_QUERY = {
    SELECT_DEPARTMENTS: 'SELECT * FROM department ORDER BY id DESC LIMIT 100',
    SELECT_DEPARTMENT:  'SELECT * FROM department WHERE id = ?',
    CREATE_DEPARTMENT:  'INSERT INTO department (name) ' + 'VALUES (?)',
    UPDATE_DEPARTMENT:  'UPDATE department SET name = ? where id = ?',
    DELETE_DEPARTMENTS: 'DELETE FROM department WHERE id = ?'                 
};

export default DEPARTMENT_QUERY;