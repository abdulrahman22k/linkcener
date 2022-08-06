const Landing = require('./../models/landingModel');
const User= require('./../models/userModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

// create landing page and add it to user collection
exports.createLanding = catchAsync(async (req, res, next) => {
    console.log('create landing page',req.params.id);
    const data =await  Landing.create(req.body);
    const user =await User.updateOne(
        { _id: req.params.id }, 
        { $push: { landing:data._id} }
    );
    console.log('user info in landinng', user);
    res.status(200).json({
      status: 'success',
      data
    });
});

exports.getLandingsUser = catchAsync(async (req, res, next) => {
  await User.
    findOne({ _id: req.params.userId }).
    select({landing:1}).
    populate({ path:'landing', select:'url'}).
    exec(function (err, user) {
      if (err) return next(new AppError('No document found with that ID', 404));
      res.status(200).json({
        status: 'success',
        data:user
      });
    })
  

})

exports.getLanding = catchAsync(async (req, res, next) => {
    let data = await Landing.findOne({ url:req.params.url }).exec();

    if (!data) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data
    });
})
//exports.getLanding = factory.getOne(Landing);
exports.getAllLanding = factory.getAll(Landing);

// Do NOT update passwords with this!
exports.updateLanding = factory.updateOne(Landing);

//delete landing and id from user
exports.deleteLanding = catchAsync(async (req, res, next) => {

  const doc =await  Landing.findByIdAndDelete(req.params.landingId);

  const user =await User.updateOne(
      { id: req.params.userID }, 
      { $pull: { landing:req.params.landingId} }
  );
  res.status(200).json({
  status: 'success',
  data: {
    doc
  }
  });
});