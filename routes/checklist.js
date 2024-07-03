const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklist');
const { authenticateToken } = require('../config/token');

router.get('/checklist', authenticateToken, checklistController.getChecklist);
router.post('/checklist', authenticateToken, checklistController.addChecklist);
router.delete('/:id', authenticateToken, checklistController.deleteChecklist);

module.exports = router;