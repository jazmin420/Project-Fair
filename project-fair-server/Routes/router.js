const express = require('express')
const userController = require('../controllers/userController')
const projectController = require('../controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

const router  = new express.Router()

//register api
router.post('/register',userController.register)
//login api
router.post('/login',userController.login)
//add project api - router specific middleware
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)
//get home project api - 
router.get('/get-home-project',projectController.getHomeProject)
//get all project api -  router specific middleware
router.get('/get-all-project',jwtMiddleware,projectController.getAllProject)
//get user project api -  router specific middleware
router.get('/get-user-project',jwtMiddleware,projectController.getUserProject)
//updateproject
router.put('/project/edit/:pid',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProject)
//removeproject
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)
//updateuser
router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)

//exporting router
module.exports = router
