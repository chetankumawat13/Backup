const express = require('express');
const multer = require('multer')
const { createPostController, getPostController, getPostDetailsController } = require('../controller/post.controller');

const postRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({storage:storage})



/**
 * /api/posts [protected]
 */


postRouter.post('/',upload.single('image'),createPostController)


/**
 * @get /api/posts [protected]
 */

postRouter.get('/',getPostController)



/**
 * @get /api/posts/details:postId [protected]
 */

postRouter.get('/details/:postId',getPostDetailsController)


module.exports =  postRouter