const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/users.js");

// /api/users
router.route("/").get(getUsers).get(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).put(deleteUser);

// /api/users/:userId/friends/:friendId
router
  .route("/userId/friends/:friendId")
  .post(createFriend)
  .delete(deleteFriend);
