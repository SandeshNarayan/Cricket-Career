import { getPlayerStats, getTeams, addPlayer, removePlayer } from '../playerUtils.js'; // Adjust the path as necessary

// Function to display player statistics
async function displayPlayerStats() {
    const playerStatsBody = document.getElementById('player-stats-body');
    playerStatsBody.innerHTML = ''; // Clear existing data

    try {
        const players = await getPlayerStats(); // Assume this fetches player stats

        players.forEach(player => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.matchesPlayed}</td>
                <td>${player.runsScored}</td>
                <td>${player.wicketsTaken}</td>
                <td>${player.average.toFixed(2)}</td>
            `;
            playerStatsBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching player stats:', error);
    }
}

// Function to display teams
async function displayTeams() {
    const teamListItems = document.getElementById('team-list-items');
    teamListItems.innerHTML = ''; // Clear existing data

    try {
        const teams = await getTeams(); // Assume this fetches the list of teams

        teams.forEach(team => {
            const listItem = document.createElement('li');
            listItem.innerText = team.name;
            teamListItems.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching teams:', error);
    }
}

// Function to handle adding a new player
async function handleAddPlayer() {
    const playerName = prompt('Enter the name of the player to add:');
    if (playerName) {
        try {
            await addPlayer(playerName); // Assume this function adds a player
            displayPlayerStats(); // Refresh player stats
            displayTeams(); // Refresh team list
        } catch (error) {
            console.error('Error adding player:', error);
        }
    }
}

// Function to handle removing a player
async function handleRemovePlayer() {
    const playerName = prompt('Enter the name of the player to remove:');
    if (playerName) {
        try {
            await removePlayer(playerName); // Assume this function removes a player
            displayPlayerStats(); // Refresh player stats
            displayTeams(); // Refresh team list
        } catch (error) {
            console.error('Error removing player:', error);
        }
    }
}

// Event listeners
document.getElementById('add-player-button').addEventListener('click', handleAddPlayer);
document.getElementById('remove-player-button').addEventListener('click', handleRemovePlayer);

// Initialize the dashboard
async function init() {
    await displayPlayerStats();
    await displayTeams();
}

init(); // Call the init function to load initial data
