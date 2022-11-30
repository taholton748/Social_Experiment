// Require express router
const router = require('express').Router();

// Set requirements (from user-controller)
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  } = require('../../user-controller');

  // Set up Get all and Post at /api/users
  router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

  // Set up GET one, PUT, and DELETE at /api/users/:id
  router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  module.exports = router;