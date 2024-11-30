import { players } from './players.js';
import { initializePlayers } from './playerUtils.js';
import { simulateMatch } from './matchSimulation.js'; // Hypothetical match simulation logic

export function startMatch() {
    if (players.length === 0) {
        alert('No players available to start a match. Please create a player first.');
        return;
    }

    // Simulate match based on players' skills and other criteria
    simulateMatch(players);
}

// Initialize players before starting the match
initializePlayers(players);
