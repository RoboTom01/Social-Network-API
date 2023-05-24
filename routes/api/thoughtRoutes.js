const router = require('express').Router();
const {
  getAllThoughts,
//   getThought,
  createThought,
//   updateThought,
//   deleteThought,
//   addReaction,
//   removeReaction,
} = require('../../controllers/thoughtController');

// /api/students
router.route('/').get(getAllThoughts).post(createThought);

// /api/students/:userId
// router.route('/:userId').get(getThought).delete(deleteThought);

// /api/students/:userId/thoughts
// router.route('/:userId/thoughts').post(addReaction);

// /api/students/:userId/thoughts/:thoughtId
// router.route('/:userId/thoughts/:thoughtId').delete(removeReaction);

module.exports = router;
