// ball.js
import { calculateProbability } from './functions/probability.js';
import { updateScorecard } from './scorecard.js';
import { players } from '../public/playerData/players.js'; // Importing player data

// Function to simulate a single ball
export function simulateBall(batsman, bowler, innings, totalRuns, oversLeft) {
    const { runsRequired, requiredRunRate } = innings;
    
    // Calculate scoring probability based on player skills, format, and other match conditions
    const probability = calculateProbability(batsman, bowler, totalRuns, oversLeft, runsRequired, requiredRunRate);
    
    // Randomly determine the outcome of the ball
    const outcome = Math.random() * 100; // Random number between 0 and 100

    let runsScored = 0;
    let wicketFallen = false;

    // Determine if the batsman scores, gets out, or hits boundaries
    if (outcome < probability.wicketChance) {
        // Batsman gets out
        wicketFallen = true;
        console.log(`${batsman.name} is out!`);
    } else if (outcome < probability.boundaryChance) {
        // Batsman hits a boundary (4 or 6)
        runsScored = (outcome < 50) ? 4 : 6; // 50% chance for 4, 50% chance for 6
        console.log(`${batsman.name} hits a boundary for ${runsScored} runs!`);
    } else {
        // Regular runs scored
        runsScored = Math.floor(Math.random() * 4) + 1; // Runs between 1 to 4
        console.log(`${batsman.name} scores ${runsScored} runs.`);
    }

    // Update the scorecard with the outcome of the ball
    updateScorecard(batsman, bowler, runsScored, wicketFallen, innings);

    // Return the results of the ball
    return {
        runsScored,
        wicketFallen,
    };
}
