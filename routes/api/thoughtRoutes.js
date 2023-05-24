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

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThought).delete(deleteThought);

// /api/thoughts/:thoughtId/thoughts
// router.route('/:thoughtId/thoughts').post(addReaction);

// /api/thoughts/:thoughtId/thoughts/:thoughtId
// router.route('/:thoughtId/thoughts/:thoughtId').delete(removeReaction);

module.exports = router;
