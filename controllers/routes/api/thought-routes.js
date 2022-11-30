// Require express router
const router = require('express').Router();

// Set requirements (from thought-controller)
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
  } = require('../../thought-controller');

// Set up GET all and POST at /api/thoughts
router
.route('/')
  .get(getAllThoughts)
  .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;