const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Transcation = require('../models/Transcation');

// @desc      Get all users
// @route     GET /api/v1/accounts
// @access    Private/Admin
exports.getTranscations = asyncHandler(async (req, res, next) => {
  const transcations = await Transcation.find({});

  res.status(200).json({
    success: true,
    count : transcations.length,
    data: transcations,
  });
});


// @desc      Get single user
// @route     GET GET /api/v1/accounts/:id
// @access    Private/Admin
exports.getTranscation = asyncHandler(async (req, res, next) => {
  const transcation = await Transaction.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: transcation,
  });
});

// @desc      Create user
// @route     POST /api/v1/accounts
// @access    Private/Admin
exports.createTranscation = asyncHandler(async (req, res, next) => {
  const transcation = await Transaction.create(req.body);

  res.status(201).json({
    success: true,
    data: transcation,
  });
});

// @desc      Update user
// @route     PUT /api/v1/auth/users/:id
// @access    Private/Admin
exports.updateTranscation = asyncHandler(async (req, res, next) => {
  const transcation = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: transcation,
  });
});

// @desc      Delete user
// @route     DELETE /api/v1/auth/users/:id
// @access    Private/Admin
exports.deleteTranscation = asyncHandler(async (req, res, next) => {
  await Transaction.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});
