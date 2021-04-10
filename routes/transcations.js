const express = require('express');

//@desc      from => jobs controller
const {
  
    getTranscations,
    createTranscation,

    getTranscation,
    updateTranscation,
    deleteTranscation

} = require('../controllers/transcations');

const router = express.Router();

/*
 * @desc  slash( / ) means route which is 
 *
 * /api/v1/{path}
 * /api/v1/{path}/:id
 * 
*/

router.route('/').get(getTranscations).post(createTranscation);
router.route('/:id').get(getTranscation).put(updateTranscation).delete(deleteTranscation);

module.exports = router;
