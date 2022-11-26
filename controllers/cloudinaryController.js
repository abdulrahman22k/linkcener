
const Landing = require('./../models/landingModel');
const cloudinary = require('cloudinary');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

exports.uploadProfile = catchAsync( async (req, res) => {
    try {
       console.log(req.body);
       const result = await cloudinary.v2.uploader.upload(req.file.path);
       const doc = await Landing.findByIdAndUpdate(req.params.landingId,{profileImage:result.secure_url} , {
           new: true,
          runValidators: true
         });
      console.log("uploaded image url => ", result);
        console.log("doc",doc)
       res.json({
          status: 'success',
          url:result.secure_url,
       });
    } catch (err) {
      console.log(err);
    }
  });
exports.uploadProfileImage = catchAsync(async (req, res, next) => {
  const doc = await Landing.findByIdAndUpdate(req.params.landingId, req.body, {
    new: true,
    runValidators: true
  });

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: doc
    }
  });
});