const express = require('express');
const router = express.Router();
const tasks = require('../controllers/tasks');

router.get('/', tasks.getAll);
router.get('/:id', tasks.getOne);

router.post('/', tasks.addNew);
router.put('/:id', tasks.updateDetails);
router.delete('/:id', tasks.deleteOne);

module.exports = router;
