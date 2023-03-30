const CourseModel = require("../models/Course");

class CourseController{

    static addCourse = async(req,res) => {
        try{
            // console.log(req.body)
            const data = await CourseModel.create(req.body)
            res
            .status(201)
            .json({ status: "success", message: "Course added Successfully 😃🍻"});
        }catch(err){
            console.log(err)
        }
    }

    static getAllCourses = async(req,res) => {
        try{
            const data = await CourseModel.find()
            res.status(201).json({
                success: true,
                data
            })
        }catch(err){
            console.log(err)
        }
    }

    static courseDetail = async(req,res) => {
        try{
            const data = await CourseModel.findById(req.params.id)
            res.status(201).json({
                success: true,
                data
            })
        }catch(err){
            console.log(err)
        }
    }
    
    static countCourse = async(req,res) => {
        try{
            const data = await CourseModel.find().count()
            res.status(200).json({
                success: true,
                data
            })
        }catch(err){
            console.log(err)
        }
    }

    static updateCourse = async(req,res) => {
        try{
            // console.log(req.files)
            // console.log(req.body)
            const { courseName, duration, fees, databaseName, languageOneIconColor, languageFourIconColor, languageThreeIconColor, languageTwoIconColor, languageOneIcon, languageTwoIcon, languageFourIcon, languageThreeIcon, databaseIcon, databaseIconColor, languageOne, languageTwo, languageThree, languageFour, description } = (req.body)
            const data = await CourseModel.findByIdAndUpdate(req.params.id,{
                courseName: courseName,
                databaseName: databaseName,
                databaseIcon: databaseIcon,
                databaseIconColor: databaseIconColor,
                languageOne: languageOne,
                languageTwo: languageTwo,
                languageThree: languageThree,
                languageFour: languageFour,
                languageOneIcon: languageOneIcon,
                languageTwoIcon: languageTwoIcon,
                languageThreeIcon: languageThreeIcon,
                languageFourIcon: languageFourIcon,
                languageOneIconColor: languageOneIconColor,
                languageTwoIconColor: languageTwoIconColor,
                languageThreeIconColor: languageThreeIconColor,
                languageFourIconColor: languageFourIconColor,
                duration: duration,
                fees: fees,
                description: description,
            })
            res
            .status(201)
            .json({ status: "success", message: "Course updated Successfully 😃🍻"});
        }catch(err){
            console.log(err)
        }
    }

    static courseDelete = async(req,res) => {
        try{
            // console.log(req.body)
            const data = await CourseModel.findByIdAndDelete(req.params.id)
            res
            .status(201)
            .json({ status: "success", message: "Course deleted Successfully 😃🍻"});
        }catch(err){
            console.log(err)
        }
    }

}
module.exports = CourseController