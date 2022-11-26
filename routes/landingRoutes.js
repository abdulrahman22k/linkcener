const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const landingController = require('./../controllers/landingController');
const uploadController = require('./../controllers/uploadController');
const cloudinaryController = require('./../controllers/cloudinaryController');
const router = express.Router();
const uploader = require("./../utils/multer");




// router
//   .route('/:url')
//   .get(landingController.getLanding)
//   .patch(userController.updateLanding)
//   .delete(userController.deleteLanding);
//router.use(authController.restrictTo('admin'));

//get landing by url

router.
    patch('/uploadProfile/:landingId', uploader.single("file"), cloudinaryController.uploadProfile);

router.
    post('/uploadProfileImage/:landingId',uploadController.uploadProfileImage);
router.
    get('/getimage/:path',uploadController.getImage);

router.
    get('/getlandingsUser/:userId', landingController.getLandingsUser)

router.get('/:url', landingController.getLanding);

//router.use(authController.restrictTo('admin'));
router.post('/:id', landingController.createLanding);

//get all landing pages
router.get('/', landingController.getAllLanding);

//delete landing and id from user collection and update
router.delete('/:landingId/:userId', landingController.deleteLanding);

router
    .route('/:id')
    .patch(landingController.updateLanding);

// router
//   .route('/')
//   .post(landingController.createLanding);
  
module.exports = router;