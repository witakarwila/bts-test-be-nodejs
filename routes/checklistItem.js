const express = require('express');
const router = express.Router();
const checklistItemController = require('../controllers/checklistItem');
const { authenticateToken } = require('../config/token');

router.get('/:id/item', authenticateToken, checklistItemController.getChecklistItemAll);
router.post('/:id/item', authenticateToken, checklistItemController.addChecklistItem);
router.get('/:id/item/:item', authenticateToken, checklistItemController.getChecklistItemById);
router.put('/:id/item/:item', authenticateToken, checklistItemController.setStatusChecklistItemById);
router.delete('/:id/item/:item', authenticateToken, checklistItemController.deleteChecklistItemById);
router.put('/:id/item/rename/:item', authenticateToken, checklistItemController.renameChecklistItemById);

module.exports = router;