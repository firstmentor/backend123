const express = require('express')
const BannerController = require('../controllers/BannerController')
const ContactUsMessageController = require('../controllers/ContactUsMessageController')
const CourseController = require('../controllers/CourseController')
const SliderController = require('../controllers/SliderController')
const StudentController = require('../controllers/StudentController')
const router = express.Router()


//StudentController
router.post('/addStudent',StudentController.addStudent)
router.get('/getAllStudents',StudentController.getAllStudents)
router.get('/getStudent/:id',StudentController.getStudent)
router.get('/countStudent',StudentController.countStudent)
router.post('/updateStudent/:id',StudentController.updateStudent)
router.delete('/deleteStudent/:id',StudentController.deleteStudent)

//CourseController
router.post('/addCourse',CourseController.addCourse)
router.get('/getAllCourses',CourseController.getAllCourses)
router.get('/courseDetail/:id',CourseController.courseDetail)
router.get('/countCourse',CourseController.countCourse)
router.post('/updateCourse/:id',CourseController.updateCourse)
router.delete('/courseDelete/:id',CourseController.courseDelete)


//ContactUsMessageModel
router.post('/addMessage',ContactUsMessageController.addMessage)
router.get('/getAllMessages',ContactUsMessageController.getAllMessages)
router.get('/messageDetail/:id',ContactUsMessageController.messageDetail)
router.get('/countMessage',ContactUsMessageController.countMessage)


//SliderController
router.post('/addSlider',SliderController.addSlider)
router.get('/getAllSlider',SliderController.getAllSlider)
router.get('/sliderDetail/:id',SliderController.sliderDetail)
router.post('/updateSlider/:id',SliderController.updateSlider)
router.delete('/sliderDelete/:id',SliderController.sliderDelete)


//BannerController
router.post('/addBanner',BannerController.addBanner)
router.get('/getAllBanner',BannerController.getAllBanner)
router.get('/getActiveBanner',BannerController.getActiveBanner)
router.get('/bannerDetail/:id',BannerController.bannerDetail)
router.post('/updateBanner/:id',BannerController.updateBanner)
router.delete('/bannerDelete/:id',BannerController.bannerDelete)










module.exports = router