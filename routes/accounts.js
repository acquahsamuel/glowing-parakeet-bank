const express = require('express');

//@desc      from => jobs controller
const {
  getAccounts,
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
} = require('../controllers/accounts');

const router = express.Router();


/*
 * @desc  slash( / ) means route which is 
 *
 * /api/v1/{path}
 * /api/v1/{path}/:id
 * 
*/

router.route('/').get(getAccounts).post(createAccount);
router.route('/:id').get(getAccount).put(updateAccount).delete(deleteAccount);

module.exports = router;
