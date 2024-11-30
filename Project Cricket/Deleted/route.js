import express from 'express';
import path from 'path';

const router = express.Router();

// Serve HTML files
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.get('/dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

router.get('/match.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'match.html'));
});

// Add routes for other HTML files as needed
router.get('/create-player.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'create-player.html'));
});

// Export the router
export default router;
