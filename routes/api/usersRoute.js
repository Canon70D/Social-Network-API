const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/users");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).put(deleteUser);

// /api/users/:userId/friends/:friendId
router
  .route("/userId/friends/:friendId")
  .post(createFriend)
  .delete(deleteFriend);

module.exports = router;
