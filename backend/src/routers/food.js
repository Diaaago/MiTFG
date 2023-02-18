const { Router } = require('express');
const { getFoods } = require('../controllers/foodController');
const { getAllFoods } = require('../controllers/foodController');
const router = Router();

router.route('/').get(getAllFoods);
router.route('/:id').get(getFoods);

module.exports = router;
