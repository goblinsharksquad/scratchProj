// Controller Logic Testing

const { registerUser, userLogin } = require('../../controllers/authController'); // Functions to test
const db = require('../../db'); // Database Module (mocking below, unsure of actual database configuration at this time)
const bcrypt = require('bcrypt'); // for Hashing passwords

jest.mock('../../db'); // Mock database module
jest.mock('bcrypt'); // Mock bcrypt for hashing and comparison


describe('authController', () => { // Group related authController tests together
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  describe('registerUser', () => {
    it('should hash the password, save the user, and call next', async () => {
      // Mock bcrypt.hash to return fake hashed password
      bcrypt.hash.mockResolvedValue('hashed_password');

      // Mock db.query to create 'successful' database insertion
      db.query.mockResolvedValue({
        rows: [{ id: 1, name: 'Test User', email: 'testuser@example.com' }],
      });

      // Test 1: Successful Registration (Woohooo)
      // Mock Express req, res, and next
      /* Reminder: 
      req - contains the user data, 
      res - holds user data after registration, 
      next - fn called when the registration process complete */
      const req = {
        body: { name: 'Test User', email: 'testuser@example.com', password: 'password123' },
      };
      const res = { locals: {} };
      const next = jest.fn();

      await registerUser(req, res, next);

      expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10); // Check if bcrypt.hash called w/ correct args
      expect(db.query).toHaveBeenCalledWith( // Check if db query called w/ correct SQL + params to insert new user
        'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email',
        ['Test User', 'testuser@example.com', 'hashed_password']
      );
      expect(res.locals.user).toEqual([{ id: 1, name: 'Test User', email: 'testuser@example.com' }]); // Check if user data was saved
      expect(next).toHaveBeenCalled(); // Ensure next() fn was called as expected
    });

// Test 2: Failed Registration
// Mock database error
// Using it() function, ref: https://www.codecademy.com/learn/learn-react-testing/modules/jest/cheatsheet
    it('should call next with an error if registration fails', async () => {
      // Mock bcrypt.hash to return a fake hashed password
      bcrypt.hash.mockResolvedValue('hashed_password');

      // Mock db.query to throw an error
      db.query.mockRejectedValue(new Error('Database error'));

      const req = { body: { name: 'Test User', email: 'testuser@example.com', password: 'password123' } };
      const res = { locals: {} };
      const next = jest.fn();

      await registerUser(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(Error)); // Ensure next() is called w/ error (registration failed, error passed to middleware)
    });
  });

  // Test 3: Successful Login
  describe('userLogin', () => {
    it('should validate the user credentials and call next', async () => {
      // Mock db.query to return user
      db.query.mockResolvedValue({
        rows: [{ id: 1, name: 'Test User', email: 'testuser@example.com', password_hash: 'hashed_password' }],
      });

      // Mock bcrypt.compare for successful pw match
      bcrypt.compare.mockResolvedValue(true);

      const req = { body: { email: 'testuser@example.com', password: 'password123' } };
      const res = { locals: {} };
      const next = jest.fn();

      await userLogin(req, res, next);

      expect(db.query).toHaveBeenCalledWith('SELECT * FROM users WHERE email = $1', ['testuser@example.com']); // Retrieve e-mail
      expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashed_password'); // Compare password
      expect(res.locals.user).toEqual({ id: 1, name: 'Test User', email: 'testuser@example.com' }); // Ensure user data was stored
      expect(next).toHaveBeenCalled(); // Ensure next() called
    });

    // Test 4: User not Found
    it('should call next with an error if the user is not found', async () => {
      // Mock db.query to return no user
      db.query.mockResolvedValue({ rows: [] });

      const req = { body: { email: 'nonexistent@example.com', password: 'password123' } };
      const res = { locals: {} };
      const next = jest.fn();

      await userLogin(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(Error)); // Ensure next() called w/ error
    });

    // Test 5: Incorrect Password
    it('should call next with an error if the password is invalid', async () => {
      // Mock db.query to return a fake user
      db.query.mockResolvedValue({
        rows: [{ id: 1, name: 'Test User', email: 'testuser@example.com', password_hash: 'hashed_password' }],
      });

      // Mock bcrypt.compare to show password doesn't match anything in db
      bcrypt.compare.mockResolvedValue(false);

      const req = { body: { email: 'testuser@example.com', password: 'wrongpassword' } };
      const res = { locals: {} };
      const next = jest.fn();

      await userLogin(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(Error)); // Ensure next() called w/ error
    });
  });
});
