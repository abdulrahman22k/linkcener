const multer = require('multer')
const catchAsync = require('./../utils/catchAsync');
const path = require("path");

const storage = multer.diskStorage({
  destination: function(req,file,cb){
  cb(null,'./public/')
  },
  filename: function(req,file,cb){
  cb(null,`profile-${req.params.landingId}.jpg` )
  //cb(null, file.originalname + '-' + Date.now())
  }
  })
  const fileFilter = (req,file,cb)=>{
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif'){
  cb(null,true)
  }
  else{
  cb('File should be JPEG, PNG or GIF type')
              }
  }
  var upload = multer({
  storage: storage,
  limits: {
  fileSize:3*1024*1024
  },
  fileFilter: fileFilter
  }).single('myImage')

exports.uploadProfileImage = catchAsync(async (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
    // An error occurred when uploading
    return res.status(404).json({
    message: err
    })
    }
    res.status(200).json({
    message:'Image uploaded'
      })
    })
});

exports.getImage = catchAsync(async (req, res, next) => {
  res.download('./public/'+req.params.path)
})
