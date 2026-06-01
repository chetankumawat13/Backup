const express = require('express');
const multer = require('multer')
const { createPostController } = require('../controller/post.controller');

const postRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({storage:storage})



/**
 * /api/posts [protected]
 */


postRouter.post('/',upload.single('image'),createPostController)





module.exports =  postRouter