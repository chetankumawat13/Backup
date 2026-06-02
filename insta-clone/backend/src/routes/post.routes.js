const express = require('express');
const multer = require('multer')
const { createPostController, getPostController, getPostDetailsController, likePostController } = require('../controller/post.controller');
const identifyUser = require('../middlewares/auth.middleware');

const postRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({storage:storage})



/**
 * /api/posts [protected]
 */


postRouter.post('/',upload.single('image'),identifyUser,createPostController)


/**
 * @get /api/posts [protected]
 */

postRouter.get('/',identifyUser,getPostController)



/**
 * @get /api/posts/details:postId [protected]
 */

postRouter.get('/details/:postId',identifyUser,getPostDetailsController)


/**
 * @route POST /api/posts/like:postId
 * @description like an a post
 * @access private
 */

postRouter.post('/like/:postId',identifyUser,likePostController)


module.exports =  postRouter