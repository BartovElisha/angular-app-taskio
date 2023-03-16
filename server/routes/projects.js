const express = require('express');
const router = express.Router();
const projects = require('../controllers/projects');

router.get('/', projects.getAll);
router.get('/:id', projects.getOne);

router.post('/', projects.addNew);
router.put('/:id', projects.updateDetails);
router.delete('/:id', projects.deleteOne);

module.exports = router;
