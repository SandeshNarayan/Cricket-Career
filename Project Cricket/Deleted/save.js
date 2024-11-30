// Example: Save game data to a database
app.post('/saveGame', (req, res) => {
    const gameData = req.body; // Data from client
    db.collection('gameData').insertOne(gameData, (err, result) => {
        if (err) return res.status(500).send('Error saving game data');
        res.status(200).send('Game saved successfully');
    });
});

// Example: Load game data from a database
app.get('/loadGame/:userId', (req, res) => {
    const userId = req.params.userId;
    db.collection('gameData').findOne({ userId: userId }, (err, result) => {
        if (err) return res.status(500).send('Error loading game data');
        if (!result) return res.status(404).send('No game data found');
        res.status(200).json(result);
    });
});


// Save game data to the server
function saveGameToServer(gameData) {
    fetch('/saveGame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Game saved:', data);
    })
    .catch(error => {
        console.error('Error saving game:', error);
    });
}

// Load game data from the server
function loadGameFromServer(userId) {
    fetch(`/loadGame/${userId}`)
    .then(response => response.json())
    .then(data => {
        console.log('Game loaded:', data);
    })
    .catch(error => {
        console.error('Error loading game:', error);
    });
}
