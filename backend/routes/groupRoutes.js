const express = require('express');
const { createGroup, joinGroup } = require('../controllers/groupController');

const router = express.Router();

router.post('/groups', createGroup, (req, res) => {
  res.status(201).json(res.locals.group);
});

router.post('/groups/join', joinGroup, (req, res) => {
  res.status(200).json({
    participant_id: res.locals.participant.id,
    group_name: res.locals.participant.groupName,
    user_name: res.locals.participant.userName,
  });
});

module.exports = router;
