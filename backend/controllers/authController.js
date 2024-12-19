// files in controller folder will contain all the logic that handles incoming requests and interacts with our database

// data will be stored in res.locals and passes control back to the next middleware function defined in our route files, which will end the request-response cycle

const bcrypt = require('bcrypt');
const db = require('../db');

const registerUser = async (req, res, next) => {
  // extract the properties from the req.body obj
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.query(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email',
      [name, email, hashedPassword]
    );
    res.locals.user = result.rows;
    next();
  } catch (error) {
    console.error('Error during registration:', error);
    next(error);
  }
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // query to find user with the given email
    const userResult = await db.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);

    const user = userResult.rows[0];

    if (!user) {
      const error = new Error('User not found');
      error.status = 404;
      return next(error);
    }
    // compare the password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatch) {
      const error = new Error('Invalid Password');
      error.status = 401;
      return next(error);
    }

    res.locals.user = { id: user.id, name: user.name, email: user.email };
    next();
  } catch (error) {
    console.error('Error during login:', error);
    next(error);
  }
};

module.exports = { registerUser, userLogin };
