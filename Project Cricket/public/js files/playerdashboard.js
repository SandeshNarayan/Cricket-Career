// Set start date (October 22, 2024) and initialize date variables
let currentDate = new Date(2024, 9, 22);  // October is month 9 (0-based indexing)
const seasonEndDate = new Date(currentDate.getFullYear() + 1, 5, 1);  // June 1st of the next year

// Event handling data (dynamic game logic can populate this)
const matchDates = [
    new Date(2024, 9, 28),  // Example match date: October 28, 2024
    new Date(2024, 10, 5),  // Example match date: November 5, 2024
    // Add more match dates here...
];

const trophyEventDate = seasonEndDate;  // June 1st is the trophy event



// Function to retrieve player details
function getPlayerDetails() {
    const loggedInUser = JSON.parse(localStorage.getItem('user')); // Retrieve user object

    if (loggedInUser) {
        // Retrieve the player's data for the logged-in user
        const playerData = JSON.parse(localStorage.getItem(`player_${loggedInUser.username}`));
        if (playerData && playerData.name) {
            // Display the player's name on the dashboard
            document.getElementById('player-name-display').textContent = `Welcome, ${playerData.name}!`;
        } else {
            alert('No player found. Please create a player.');
            window.location.href = 'create-player.html'; // Redirect to create player if no player found
        }
    } else {
        alert('No user is logged in.');
        window.location.href = 'login.html'; // Redirect to login page if no user is found
   }
}

// Function to display player details on the dashboard
function showPlayerDetails() {
    const player = getPlayerDetails();

    if (player) {
        // Create a container for player details
        const playerDetailsContainer = document.createElement('div');
        playerDetailsContainer.id = 'player-details-container';

        // Add player's name
        const playerName = document.createElement('h2');
        playerName.textContent = `Player Name: ${player.name}`;
        playerDetailsContainer.appendChild(playerName);

        // Add player's age
        const playerAge = document.createElement('p');
        playerAge.textContent = `Age: ${player.age}`;
        playerDetailsContainer.appendChild(playerAge);

        // Add player's jersey number
        const playerJersey = document.createElement('p');
        playerJersey.textContent = `Jersey Number: ${player.jerseyNumber}`;
        playerDetailsContainer.appendChild(playerJersey);

        // Add player's preferred style (right or left)
        const playerStyle = document.createElement('p');
        playerStyle.textContent = `Preferred Style: ${player.preferredStyle}`;
        playerDetailsContainer.appendChild(playerStyle);

        // Add player's role (batsman, bowler, allrounder, keeper)
        const playerRole = document.createElement('p');
        playerRole.textContent = `Role: ${player.role}`;
        playerDetailsContainer.appendChild(playerRole);

        // Add specific details based on the role
        if (player.role === 'bowler') {
            const bowlingType = document.createElement('p');
            bowlingType.textContent = `Bowling Type: ${player.bowlingType}`;
            playerDetailsContainer.appendChild(bowlingType);
        } else {
            const battingPosition = document.createElement('p');
            battingPosition.textContent = `Batting Position: ${player.battingPosition}`;
            playerDetailsContainer.appendChild(battingPosition);
        }

        // Add player's batting/bowling style (aggressive, defensive, normal)
        const playerPlayStyle = document.createElement('p');
        playerPlayStyle.textContent = `Play Style: ${player.playStyle}`;
        playerDetailsContainer.appendChild(playerPlayStyle);

        // Append player details to the dashboard
        document.body.appendChild(playerDetailsContainer);

    } else {
        alert('No player found. Please create a player first.');
    }
}

// Call showPlayerDetails() when the dashboard loads
window.onload = function() {
    checkLoginStatus();  // Make sure the user is logged in first
    showPlayerDetails(); // Then load and display player details
};


// Ensure the user is logged in before accessing the dashboard
function checkLoginStatus() {
    const loggedInUser = JSON.parse(localStorage.getItem('user')); // Retrieve user object
    
    if (!loggedInUser) {
        // If the user is not logged in, redirect to the login page
        alert('You must be logged in to access the dashboard.');
        window.location.href = 'index.html';
    } else {
        loadPlayerDashboard(loggedInUser);
    }
}

// Function to load the player dashboard dynamically
function loadPlayerDashboard(loggedInUser) {
    // Create a dashboard container
    const dashboardContainer = document.createElement('div');
    dashboardContainer.id = 'dashboard-container';
    document.body.appendChild(dashboardContainer);

    // Welcome message for the logged-in user
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = `Welcome, ${loggedInUser}!`;
    dashboardContainer.appendChild(welcomeMessage);

    // Display the current date
    const dateDisplay = document.createElement('p');
    dateDisplay.id = 'date-display';
    dateDisplay.textContent = `Current Date: ${currentDate.toDateString()}`;
    dashboardContainer.appendChild(dateDisplay);

    // Add stats section
    createLinkSection(dashboardContainer, 'Stats', 'User/stats.html');

    // Add next week / event section
    handleNextWeekEvent(dashboardContainer);

    // Add league ranking and fixture link
    createLinkSection(dashboardContainer, 'League Ranking & Fixture', 'User/fixture.html');

    // Add skills link
    createLinkSection(dashboardContainer, 'Skills', 'User/skills.html');

    // Add world's best link
    createLinkSection(dashboardContainer, 'World\'s Best Players', 'User/ranking.html');

    // Add lifestyle link
    createLinkSection(dashboardContainer, 'Lifestyle', 'User/lifestyle.html');
}

// Utility function to create a link section dynamically
function createLinkSection(container, title, url) {
    const section = document.createElement('div');
    section.classList.add('dashboard-section');

    const link = document.createElement('button');
    link.textContent = title;
    
    // Add an event listener to navigate to the specified URL when the button is clicked
    link.addEventListener('click', () => {
        window.location.href = url;
    });
    section.appendChild(link);
    container.appendChild(section);
}

// Function to handle the "Next Week" event logic and date advancement
function handleNextWeekEvent(container) {
    const section = document.createElement('div');
    section.classList.add('dashboard-section');

    const nextWeekButton = document.createElement('button');
    nextWeekButton.textContent = 'Next Week';
    section.appendChild(nextWeekButton);
    container.appendChild(section);

    nextWeekButton.addEventListener('click', advanceToNextEventOrWeek);
}

// Function to advance the date to the next event or week
function advanceToNextEventOrWeek() {
    // Check if there is an upcoming match or event in the current week
    const nextEventDate = getNextEventDate();

    if (nextEventDate) {
        // If there is an event (like a match or trophy ceremony), move the date to that event
        currentDate = nextEventDate;
    } else {
        // Otherwise, move the date one week ahead
        currentDate.setDate(currentDate.getDate() + 7);
    }

    // Update the date display
    document.getElementById('date-display').textContent = `Current Date: ${currentDate.toDateString()}`;
    
    // Check for trophy event
    if (currentDate >= trophyEventDate && currentDate <= new Date(trophyEventDate.getTime() + 24 * 60 * 60 * 1000)) {
        alert('Trophy ceremony this week! Redirecting to rewards page.');
        window.location.href = 'User/trophies.html';
    }
}

// Function to get the next event (match, mail, etc.)
function getNextEventDate() {
    // Check for the next match date after the current date
    const upcomingMatch = matchDates.find(date => date > currentDate);

    // Check if the next match is earlier than the end-of-season trophy event
    if (upcomingMatch && upcomingMatch <= trophyEventDate) {
        return upcomingMatch;
    }

    // If no match, check if we are nearing the trophy event
    if (currentDate >= trophyEventDate) {
        return trophyEventDate;
    }

    return null; // No upcoming events this week
}

// Initialize the dashboard when the page loads
window.onload = checkLoginStatus;
