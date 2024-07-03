const db = require('../models');

const Checklist = db.checklist;
const ChecklistItem = db.checklistItem;

module.exports = {
  getChecklist: async (req, res) => {
    try {
      const data = await Checklist.findAll();
      if (!data.length) return res.status(404).json({ message: 'Checklist Not Found' });
      return res.json({ data });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  addChecklist: async (req, res) => {
    const userId = req.user.id
    const { name } = req.body
    try {
      return await Checklist.create({
        name: name,
        userId: userId
      })
        .then((item) => res.status(201).json({ message: 'Checklist created!', data: item }))
        .catch((err) => res.status(400).json({ message: err.message, data: null }));
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deleteChecklist: async (req, res) => {
    try {
      const { id } = req.params;
      return await Checklist.destroy({ where: { id } })
        .then((item) => { if (item) { res.status(201).json({ message: 'success' }); } })
        .catch((err) => res.status(400).json({ message: err.message, data: null }));
    } catch (error) {
      return res.status(500).json(error);
    }
  },

};