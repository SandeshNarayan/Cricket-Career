const availablePlayers = [
    { name: 'Player 1', role: 'Batsman', team: 'Team A' },
    { name: 'Player 2', role: 'Bowler', team: 'Team A' },
    // Add more players
];

const selectedPlayers = [];

// Populate the available players list
function populateAvailablePlayers() {
    const availableList = document.getElementById('available-players-list');
    availableList.innerHTML = ''; // Clear previous list

    availablePlayers.forEach(player => {
        const listItem = document.createElement('li');
        listItem.textContent = `${player.name} (${player.role})`;
        listItem.addEventListener('click', () => selectPlayer(player));
        availableList.appendChild(listItem);
    });
}

// Add player to the selected players list
function selectPlayer(player) {
    if (selectedPlayers.length < 11) {
        selectedPlayers.push(player);
        updateSelectedPlayers();
        availablePlayers.splice(availablePlayers.indexOf(player), 1); // Remove from available players
        populateAvailablePlayers();
    }
}

// Update the selected players list
function updateSelectedPlayers() {
    const selectedList = document.getElementById('selected-players-list');
    selectedList.innerHTML = '';

    selectedPlayers.forEach(player => {
        const listItem = document.createElement('li');
        listItem.textContent = `${player.name} (${player.role})`;
        selectedList.appendChild(listItem);
    });
}

// Set bowling strategy drop-downs
function updateBowlerDropdowns() {
    const primaryBowlerSelect = document.getElementById('primary-bowler');
    const secondaryBowlerSelect = document.getElementById('secondary-bowler');

    primaryBowlerSelect.innerHTML = '';
    secondaryBowlerSelect.innerHTML = '';

    selectedPlayers.forEach(player => {
        if (player.role === 'Bowler' || player.role === 'Allrounder') {
            const option = document.createElement('option');
            option.value = player.name;
            option.textContent = player.name;

            primaryBowlerSelect.appendChild(option.cloneNode(true));
            secondaryBowlerSelect.appendChild(option);
        }
    });
}

// Confirm selection of players
document.getElementById('confirm-selection').addEventListener('click', () => {
    if (selectedPlayers.length === 11) {
        alert('Playing XI confirmed');
        updateBowlerDropdowns(); // Enable setting bowling strategy
    } else {
        alert('Please select 11 players');
    }
});

// Save strategy (batting order, bowling strategy)
document.getElementById('save-strategy').addEventListener('click', () => {
    // Save team strategy logic here
    alert('Strategy saved successfully!');
});

// Initialize the page with available players
populateAvailablePlayers();
