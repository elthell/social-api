const router = require("express").Router();

// routes
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users -- GET all / POST
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId -- GET one / PUT / DELETE
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId -- POST / DELETE friend
router.route('/:userId/friends/:friendId')
.post(createFriend)
.delete(deleteFriend);

module.exports = router;
