const router = require('express').Router();
const {
  getAllThoughts,
  getThought,
  createThought,
//   updateThought,
  deleteThought,
//   addReaction,
//   removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:userId
router.route('/:userId').get(getThought).delete(deleteThought);

// /api/thoughts/:userId/thoughts
// router.route('/:userId/thoughts').post(addReaction);

// /api/thoughts/:userId/thoughts/:thoughtId
// router.route('/:userId/thoughts/:thoughtId').delete(removeReaction);

module.exports = router;
