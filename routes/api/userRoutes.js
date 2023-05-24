const router = require('express').Router();
const {
getAllUsers,
// getUser,
createUser,
// updateUser,
// deleteUser,
// addFriend,
// removeFriend
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/courses/:userId
// router
//   .route('/:userId')
//   .get(getSingleCourse)
//   .put(updateCourse)
//   .delete(deleteCourse);

// /api/courses/:userId/friends/:friendID

module.exports = router;
