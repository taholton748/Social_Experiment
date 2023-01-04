// Require express router
const router = require("express").Router();

// Set requirements (from user-controller)
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require("../../controllers/user-controller");

// Set up Get all and Post at /api/users
router.route("/").get(getAllUsers).post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Add and remove friends
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
