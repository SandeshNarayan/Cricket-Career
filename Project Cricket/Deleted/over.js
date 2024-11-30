// over.js
import { simulateBall } from './ball.js';
import { updateScorecard } from './match/scorecard.js';
import { players } from './players.js'; // Import player data if needed

// Function to simulate an over
export function simulateOver(batsman, bowler, innings, totalRuns, oversLeft) {
    let overRuns = 0; // Total runs scored in the over
    let wickets = 0; // Number of wickets fallen in the over

    console.log(`Over started by ${bowler.name}.`);

    for (let ball = 1; ball <= 6; ball++) {
        const result = simulateBall(batsman, bowler, innings, totalRuns, oversLeft);
        overRuns += result.runsScored;

        // Check if a wicket fell
        if (result.wicketFallen) {
            wickets++;
            // If a wicket falls, you may want to update the batsman and handle the new batsman logic here
            // For example, you can pick a new batsman from the available players.
        }
        
        // Update the scorecard after each ball (optional)
        updateScorecard(batsman, bowler, result.runsScored, result.wicketFallen, innings);
    }

    // Log the results of the over
    console.log(`Over completed. Total runs in the over: ${overRuns}, Wickets: ${wickets}.`);

    // Return the total runs and wickets from the over
    return {
        overRuns,
        wickets,
    };
}
