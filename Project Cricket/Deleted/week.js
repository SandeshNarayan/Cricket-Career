// week.js
import { startMatch } from '../public/match.js';
import { getScheduledMatches } from './league.js'; // Assuming this function returns matches for the week
import { player } from './player.js'; // Assuming player data is imported

// Function to simulate matches for the week
export function simulateWeek(playerTeam) {
    // Get all matches scheduled for the week
    const matches = getScheduledMatches(); // This function should return an array of match objects

    console.log(`Simulating matches for the week...`);
    
    // Iterate through each match
    matches.forEach(match => {
        // Check if the match involves the player's team
        if (match.team1 !== playerTeam && match.team2 !== playerTeam) {
            // Simulate the match if the player's team is not involved
            startMatch(match.team1, match.team2, match.totalOvers);
        } else {
            console.log(`Skipping match: ${match.team1.name} vs ${match.team2.name} - Player is participating.`);
        }
    });
}
