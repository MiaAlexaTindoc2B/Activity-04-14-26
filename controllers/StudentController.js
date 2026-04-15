import * as StudentModel from "../models/StudentModel.js";

export const fetchStudents = async (req, res) => {
  try {
    const students = await StudentModel.getStudents();
    res.status(200).json({ 
        success: true,
        message: students
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ 
        success: false,
        message: "Internal Server Error"
    });
  }
};

export const createStudnts = async( req, res) =>{
  const{srcode, Name, course} = req.body
  try{
    const studentId = await StudentModel.insertStudent(srcode,Name,course);
    res.status(200).json({
      success: true,
      message: studentId
    })
  }catch(e){
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}

export const editStudent = async(req,res)=>{
  const {srcode, Name, course} = req.body;
  const {studentId}= req.params

  try{
    const updateID = await StudentModel.updateStudent(srcode, Name, course, studentId);
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
export const deleteStudent = async(req,res)=>{
  
  const {studentId}= req.params;

  try{
    const dleteID = await StudentModel.deleteStudent(studentId);
    res.status(200).json ({
      success:true,
      message: dleteID
    });
  }catch(e){
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    })
  }
}

