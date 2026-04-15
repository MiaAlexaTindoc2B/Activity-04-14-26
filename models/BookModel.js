import pool from './db.js';

export const getBooks = async () => {
  const [rows] = await pool.query('SELECT * FROM tblbook');
  return rows;
};


 export const insertBook = async(title, genre, status) =>{
  const [result] = await pool.query(
    "Insert into tblbook (title,genre,status) Values(?,?,?)"
    ,[title, genre, status]
  );
  return result.insertId;
 }

 export const updateBook = async (title, genre, status, bookId) =>{
  const [result] = await pool.query(
    "Update tblbook Set title=?, genre=?, status=? WHERE id=? ",
    [title, genre, status, bookId]
  )
  return result.affectedRows;
 }
 export const deleteBook = async (bookId) =>{
  const [result] = await pool.query(
    "delete from tblbook WHERE id=? ",
    [bookId]
  )
  return result.affectedRows;
 }

