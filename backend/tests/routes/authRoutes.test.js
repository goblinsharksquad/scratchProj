// Route Testing

// Tests for the controller functions that handle authentication logic
// Verifies user data is processed correctly 
// Ensures user registration and login logic is correct
// Tests interactions with the database adding users, validating credentials

// Import Modules
const request = require('supertest');
const express = require('express');
const authRoutes = require('../../routes/authRoutes'); 

// Mock Controller functions
jest.mock('../../controllers/authController', () => ({ // Mock from authController ('fake')
  registerUser: jest.fn((req, res, next) => { // Create mock function
    // Simulate middleware that sets user in res.locals
    res.locals.user = { id: 1, name: 'Test User', email: 'testuser@example.com' };
    next();
  }),
  userLogin: jest.fn((req, res, next) => {
    // Simulate middleware that sets user in res.locals
    res.locals.user = { id: 1, name: 'Test User', email: 'testuser@example.com' };
    next();
  }),
}));

// Set up Express Portion
const app = express(); // Create Express instance
app.use(express.json()); // Middleware for parsing JSON
app.use('/auth', authRoutes); // Mount authRoutes at /auth (https://stackoverflow.com/questions/57654850/express-mounting-routes)

describe('Auth Routes', () => { // Jest function: Groups related Auth Routes tests

  // Sample Test 
  describe('Sample Test Suite', () => {
    it('should pass a basic test', () => {
      expect(1 + 1).toBe(2);
    });
  });

  // Test POST /auth/register
  describe('POST /auth/register', () => {
    it('should register a user and return a success message', async () => { // Test Case for POST
      const response = await request(app)
        .post('/auth/register')
        .send({ // Send the following data...
          name: 'Test User',
          email: 'testuser@example.com',
          password: 'password123',
        });
      
      expect(response.status).toBe(201); // Successful ('Created')
      expect(response.body).toEqual({ // Ensure format matched
        message: 'User registered successfully',
        user: { id: 1, name: 'Test User', email: 'testuser@example.com' },
      });
    });
  });

  // Test POST /auth/login
  describe('POST /auth/login', () => {
    it('should log in a user and return a success message', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({
          email: 'testuser@example.com',
          password: 'password123',
        });

      expect(response.status).toBe(200); // Successful ('OK')
      expect(response.body).toEqual({
        message: 'Login Successful',
        user: { id: 1, name: 'Test User', email: 'testuser@example.com' },
      });
    });
  });
});
