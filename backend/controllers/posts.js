import RegisterStudents from "../models/registerStudents.js"

export const getStudents = async (req,res)=>{
    res.send('working')
    try {
        const students = await RegisterStudents
        console.log(students)
        res.status(200).json(students)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createStudent = async (req,res)=>{
    const student = req.body;
    const newStudent= new RegisterStudents(student) 

    try {
        
 await newStudent.save()
 res.status(201).json(newStudent)



    } catch (error) {

        res.status(409).json({message:error.message})
        
    }

}