const db = require('../db');

const createGroup = async (req, res, next) => {
  const { name, description, createdBy } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO groups (name, description, created_by) VALUES ($1, $2, $3) RETURNING *',
      [name, description, createdBy]
    );
    res.locals.group = result.rows[0];
    next();
  } catch (error) {
    console.log('Error creating group:', error);
    next(error);
  }
};

const joinGroup = async (req, res, next) => {
  const { groupName, userName } = req.body;

  try {
    const groupExists = await db.query(
      'SELECT id FROM groups WHERE name = $1',
      [groupName]
    );

    if (groupExists.rows.length === 0) {
      const error = new Error('Group not found');
      error.status = 404;
      return next(error);
    }

    const groupId = groupExists.rows[0].id;

    const userExists = await db.query('SELECT id FROM users WHERE name = $1', [
      userName,
    ]);

    if (userExists.rows.length === 0) {
      const error = new Error('User not found');
      error.status = 404;
      return next(error);
    }

    const userId = userExists.rows[0].id;

    const result = await db.query(
      'INSERT INTO participants (group_id, user_id) VALUES ($1, $2) ON CONFLICT (group_id, user_id) DO NOTHING RETURNING *',
      [groupId, userId]
    );

    if (result.rows.length === 0) {
      const error = new Error('User is already in a group');
      error.status = 409;
      return next(error);
    }

    res.locals.participant = {
      id: result.rows[0].id,
      groupName,
      userName,
    };

    next();
  } catch (error) {
    console.error('Error joining group:', error);
    next(error);
  }
};

const getGroupParticipants = async (req, res, next) => {
  const { groupName } = req.params;

  try {
    const result = await db.query(
      // JOIN -> bring in data from users table
      // ON -> for each row in participants table, find the corresponding row in users table where participants.user_id = users.id
      `SELECT users.id, users.name, users.email
      FROM participants
      JOIN users ON participants.user_id = users.id
      JOIN groups ON participants.group_id = groups.id
      WHERE groups.name = $1`,
      [groupName]
    );

    res.locals.participants = result.rows;
    next();
  } catch (error) {
    console.error(`Error fetching participants:`, error);
    next(error);
  }
};

module.exports = { createGroup, joinGroup, getGroupParticipants };
