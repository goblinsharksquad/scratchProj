// this file is the entry point of our app, imports the configured Express app from app.js and starts the server

const app = require('./app');

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
