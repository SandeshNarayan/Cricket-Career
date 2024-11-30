import { players } from './players.js'; // Assuming players data is imported from players.js

// Function to initialize player data with random skills and roles
export function initializePlayers(playerList) {
    playerList.forEach((player) => {
        // Randomly generate skills
        player.batting.powerHitting.value = getRandomInt(50, 100);
        player.batting.precision.value = getRandomInt(50, 100);
        player.batting.timing.value = getRandomInt(50, 100);
        player.batting.runningBetweenWickets.value = getRandomInt(50, 100);

        player.bowling.swing.value = getRandomInt(50, 100);
        player.bowling.spin.value = getRandomInt(50, 100);
        player.bowling.control.value = getRandomInt(50, 100);
        player.bowling.pace.value = getRandomInt(70, 90); // Example pace range
        player.bowling.variation.value = getRandomInt(50, 100);

        player.fielding.catching.value = getRandomInt(50, 100);
        player.fielding.throwingAccuracy.value = getRandomInt(50, 100);
        player.fielding.agility.value = getRandomInt(50, 100);

        player.physical.speed.value = getRandomInt(50, 100);
        player.physical.strength.value = getRandomInt(50, 100);
        player.physical.endurance.value = getRandomInt(50, 100);

        player.mental.concentration.value = getRandomInt(50, 100);
        player.mental.aggression.value = getRandomInt(50, 100);
        player.mental.adaptability.value = getRandomInt(50, 100);

        player.experience.matchesPlayed.value = 0; // Start with no matches played
        player.experience.performanceHistory.value = 0;

        player.fitness.injuryHistory.value = 0; // 0 indicates no injury

        // Randomly assign batting and bowling roles
        player.role.battingRole.value = assignBattingRole();
        player.role.bowlingRole.value = assignBowlingRole();
    });
}

// Function to get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to assign a random batting role
function assignBattingRole() {
    const roles = ['opener', 'middle-order', 'finisher', 'all-rounder'];
    return roles[Math.floor(Math.random() * roles.length)];
}

// Function to assign a random bowling role
function assignBowlingRole() {
    const roles = ['fast', 'medium', 'spin', 'all-rounder'];
    return roles[Math.floor(Math.random() * roles.length)];
}

// Function to update player statistics after a match
export function updatePlayerStats(playerIndex, runs, isWicket) {
    const player = players[playerIndex];

    // Update runs scored and wickets taken
    if (runs > 0) {
        player.experience.performanceHistory.value += runs;
        player.experience.matchesPlayed.value++;
    }

    if (isWicket) {
        player.experience.performanceHistory.value -= 5; // Penalty for getting out
    }

    // Update other relevant statistics here, like average, strike rate, etc.
    // This can be customized based on your game logic
}
