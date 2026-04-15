import pool from './db.js';

export const getStudents = async () => {
  const [rows] = await pool.query('SELECT * FROM tblstudents');
  return rows;
};

 export const insertStudent = async(srcode, Name, course) =>{
  const [result] = await pool.query(
    "Insert into tblstudents (srcode, Name, course) Values(?,?,?)"
    ,[srcode, Name, course]
  );
  return result.insertId;
 }

 export const updateStudent = async (srcode, Name, course, studentId) =>{
  const [result] = await pool.query(
    "Update tblstudents Set srcode=?, Name=?, course=? WHERE id=? ",
    [srcode, Name, course, studentId]
  )
  return result.affectedRows;
 }
 export const deleteStudent = async (studentId) =>{
  const [result] = await pool.query(
    "delete from tblstudents WHERE id=? ",
    [studentId]
  )
  return result.affectedRows;
 }

