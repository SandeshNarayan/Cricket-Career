const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));


// Define routes (example)
app.get('/api/players', (req, res) => {
    // Fetch and return player data
    res.json([{ name: 'Player 1' }, { name: 'Player 2' }]); // Example data
});

// Routes
// Serve the index.html file (Dashboard)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Route to serve the player creation page
app.get('/create-player.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'create-player.html'));
});

// Route to serve the match page
app.get('/match.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'match.html'));
});

// Route for T20 format
app.get('/t20', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 't20.html'));
});

// Route for ODI format
app.get('/odi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'odi.html'));
});

// Route for Test format
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'test.html'));
});

// Route for handling login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route for handling logout
app.get('/logout', (req, res) => {
    // You can implement session clearing or other logout logic here
    res.redirect('/login');
});

// Route to serve other static assets like JS, CSS, images
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', req.url));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
