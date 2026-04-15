import * as BookModel from "../models/BookModel.js";

export const fetchBooks = async (req, res) => {
  try {
    const books = await BookModel.getBooks();
    res.status(200).json({ 
        success: true,
        message: books
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ 
        success: false,
        message: "Internal Server Error"
    });
  }
};

export const createBook = async( req, res) =>{
  const{title, genre, status} = req.body
  try{
    const bookId = await BookModel.insertBook(title,genre,status);
    res.status(200).json({
      success: true,
      message: bookId
    })
  }catch(e){
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}

export const editBooks = async(req,res)=>{
  const {title, genre, status} = req.body;
  const {bookId}= req.params

  try{
    const updateID = await BookModel.updateBook(title, genre, status, bookId);
    res.status(200).json ({
      success:true,
      message: updateID
    });
  }catch(e){
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}
export const deleteBooks = async(req,res)=>{
  
  const {bookId}= req.params;

  try{
    const dleteID = await BookModel.deleteBook(bookId);
    res.status(200).json ({
      success:true,
      message: dleteID
    });
  }catch(e){
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}

