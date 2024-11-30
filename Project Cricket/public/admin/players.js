// players.js

// Assuming you have an endpoint that provides player data
const playerApiEndpoint = '/api/players'; // Adjust the endpoint as necessary

// Function to fetch player data
async function fetchPlayers() {
    try {
        const response = await fetch(playerApiEndpoint);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const players = await response.json();
        displayPlayers(players);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        document.getElementById('players-list').innerText = 'Error fetching players.';
    }
}

// Function to display player names
function displayPlayers(players) {
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = ''; // Clear existing content

    if (players.length === 0) {
        playersList.innerHTML = '<li>No players found.</li>';
        return;
    }

    players.forEach(player => {
        const listItem = document.createElement('li');
        listItem.textContent = player.name; // Adjust this based on your player object structure
        playersList.appendChild(listItem);
    });
}

// Call the fetch function when the page loads
window.onload = fetchPlayers;
