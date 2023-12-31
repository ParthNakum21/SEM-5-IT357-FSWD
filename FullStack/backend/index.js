const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const users = [
  { username: 'user', password: 'password' },
  // Add more users if needed
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Set a cookie to remember the user's background color
    res.cookie('bgColor', 'lightblue', { maxAge: 86400000 }); // 1 day in milliseconds
    res.cookie('username', username, { maxAge: 86400000 }); // 1 day in milliseconds
    res.json({ success: true, username });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/logout', (req, res) => {
  res.clearCookie('bgColor');
  res.clearCookie('username');
  res.json({ success: true });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
