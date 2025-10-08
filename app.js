const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());
// const port = 5000;
const PORT = process.env.PORT || 5000;  // Use Render's PORT if available

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Load routers
const assessRouter = require('./routes/assess');
const sectorsRouter = require('./routes/sectors');
const authRouter = require('./routes/auth');

const complianceRouter = require('./routes/compliance');


// Use routers
app.use('/api/assess', assessRouter);
app.use('/api/sectors', sectorsRouter);
app.use('/api/auth', authRouter);
app.use('/api', complianceRouter);

// Root page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Fallback route
app.use((req, res) => {
  res.status(404).json({ error: `Cannot ${req.method} ${req.url}` });
});

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
