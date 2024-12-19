const db = require('../db');

const createGroup = async (req, res, next) => {
  const { name, description, createdBy } = req.body;

  try {
    const result = db.query(
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

module.exports = { createGroup };
