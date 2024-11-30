// admin-home.js

// Function to handle button clicks
function handleButtonClick(action) {
    switch (action) {
        case 'managePlayers':
            alert("Redirecting to Manage Players...");
            window.location.href = 'admin-players.html';
            break;
        case 'viewMatches':
            alert("Redirecting to View Matches...");
            window.location.href = 'admin-matches.html';
            break;
        case 'viewStats':
            alert("Redirecting to View Statistics...");
            window.location.href = 'admin-stats.html';
            break;
        case 'createPlayer':
            alert("Redirecting to Create New Player...");
            window.location.href = 'create-player.html';
            break;
        case 'createMatch':
            alert("Redirecting to Schedule New Match...");
            window.location.href = 'create-match.html';
            break;
        default:
            console.error("Unknown action: " + action);
            break;
    }
}

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
    const managePlayersButton = document.querySelector('.button');
    const viewMatchesButton = document.querySelectorAll('.button')[1];
    const viewStatsButton = document.querySelectorAll('.button')[2];
    const createPlayerButton = document.querySelectorAll('.button')[3];
    const createMatchButton = document.querySelectorAll('.button')[4];

    managePlayersButton.addEventListener('click', () => handleButtonClick('managePlayers'));
    viewMatchesButton.addEventListener('click', () => handleButtonClick('viewMatches'));
    viewStatsButton.addEventListener('click', () => handleButtonClick('viewStats'));
    createPlayerButton.addEventListener('click', () => handleButtonClick('createPlayer'));
    createMatchButton.addEventListener('click', () => handleButtonClick('createMatch'));
});
