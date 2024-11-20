const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express(); // Initialize Express app
const server = http.createServer(app); // Create HTTP server
const io = socketIo(server, { cors: { origin: '*' } }); // Initialize Socket.IO

const SECRET_KEY = 'your_secret_key';

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'realtime_app',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Authentication Endpoints
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'User created!' });
    });
  } catch (error) {
    res.status(500).send({ message: 'Error creating user' });
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err || results.length === 0) return res.status(401).send({ message: 'User not found' });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(401).send({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
    res.send({ token });
  });
});

// Real-time Communication
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('updateData', (newData) => {
    db.query('INSERT INTO items SET ?', newData, (err) => {
      if (err) throw err;
      io.emit('dataUpdated', newData);
    });
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the Server
server.listen(3001, () => console.log('Server running on port 3001'));
