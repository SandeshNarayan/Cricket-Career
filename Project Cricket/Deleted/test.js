import { players, updatePlayerStats } from './players.js'; // Assuming this file exports players and a function to update player stats
import { createScoreboardRow, updateScoreboard } from './scoreboard.js'; // Assuming this file manages scoreboard UI
import { logEvent } from './log.js'; // Assuming this file handles logging events
import { initializePlayers } from './playerUtils.js'; // A utility to initialize players

let currentInnings = 1;
let oversLeft = 90; // Total overs in a Test match
let runs = 0;
let wickets = 0;

// Initialize scoreboard
const scoreboardBody = document.getElementById('scoreboard-body');
const logList = document.getElementById('log-list');

// Function to log match events
function logEvent(message) {
    const listItem = document.createElement('li');
    listItem.textContent = message;
    logList.appendChild(listItem);
}

// Function to simulate a ball being bowled
function bowlBall() {
    // Simulate run scored, wicket, and extras (could be randomized)
    const outcome = Math.random();
    let runsScored = 0;
    let isWicket = false;

    // Example probabilities (customize as needed)
    if (outcome < 0.05) {
        isWicket = true; // 5% chance of wicket
        wickets++;
        logEvent(`Wicket! Batsman out. Total Wickets: ${wickets}`);
    } else if (outcome < 0.45) {
        runsScored = Math.floor(Math.random() * 4) + 1; // 1-4 runs
        logEvent(`Runs scored: ${runsScored}`);
    } else {
        runsScored = 0; // Dot ball
        logEvent(`Dot ball!`);
    }

    // Update runs and player stats
    runs += runsScored;
    // Assuming you have a way to get the current batsman index
    const currentBatsmanIndex = getCurrentBatsmanIndex(); // Replace with actual logic
    updatePlayerStats(currentBatsmanIndex, runsScored, isWicket);

    // Update UI
    updateScoreboard(players);
    document.getElementById('runs').textContent = `Runs: ${runs}`;
    document.getElementById('wickets').textContent = `Wickets: ${wickets}`;

    // Handle overs left
    if (runsScored > 0 || isWicket) {
        // Over completed
        oversLeft--;
        document.getElementById('overs-left').textContent = `Overs Left: ${oversLeft}`;
        if (oversLeft <= 0) {
            endInnings();
        }
    }
}

// Function to start the match
function startMatch() {
    // Initialize players and their stats here
    initializePlayers(players); // Populate players with random data or from a database

    updateScoreboard(players);
    document.getElementById('start-match').disabled = true; // Disable start button
    document.getElementById('next-ball').disabled = false; // Enable next ball button
    logEvent('Match Started!');
}

// Function to end the innings
function endInnings() {
    logEvent(`Innings Ended. Total Runs: ${runs}, Wickets: ${wickets}`);
    // You can add logic to switch innings or end the match
}

// Event listeners for buttons
document.getElementById('start-match').addEventListener('click', startMatch);
document.getElementById('next-ball').addEventListener('click', bowlBall);
