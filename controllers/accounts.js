const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Account = require('../models/Account');

// @desc      Get all account
// @route     GET /api/v1/accounts
// @access    Private/Admin
exports.getAccounts = asyncHandler(async (req, res, next) => {
  const account = await Account.find({});

  res.status(200).json({
    success: true,
    count : account.length,
    data: account,
  });
});


// @desc      Get single account
// @route     GET GET /api/v1/accounts/:id
// @access    Private/Admin
exports.getAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: account,
  });
});

// @desc      Create account
// @route     POST /api/v1/accounts
// @access    Private/Admin
exports.createAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.create(req.body);

  res.status(201).json({
    success: true,
    data: account,
  });
});

// @desc      Update account
// @route     PUT /api/v1/auth/users/:id
// @access    Private/Admin
exports.updateAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: account,
  });
});

// @desc      Delete account
// @route     DELETE /api/v1/auth/users/:id
// @access    Private/Admin
exports.deleteAccount = asyncHandler(async (req, res, next) => {
  await Account.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});
