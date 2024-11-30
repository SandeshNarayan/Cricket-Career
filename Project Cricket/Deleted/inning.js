// innings.js
import { simulateOver } from '../public/over.js';
import { updateScorecard } from '../public/scorecard.js';
import { players } from './players.js'; // Import player data if needed
import { getNextBatsman } from './playerSelection.js'; // Import function to select next batsman

// Function to simulate an innings
export function simulateInnings(battingTeam, bowlingTeam, totalOvers) {
    let totalRuns = 0; // Total runs scored in the innings
    let wickets = 0; // Total wickets fallen in the innings
    let oversCompleted = 0; // Count of completed overs
    let batsmen = [battingTeam[0]]; // Start with the first batsman

    while (oversCompleted < totalOvers && wickets < 10) {
        console.log(`Starting Over ${oversCompleted + 1}`);

        // Simulate an over
        const { overRuns, wickets: overWickets } = simulateOver(batsmen[0], bowlingTeam[oversCompleted % bowlingTeam.length], totalRuns, totalOvers - oversCompleted);

        totalRuns += overRuns;
        wickets += overWickets;

        // Update the scorecard for the innings
        updateScorecard(batsmen[0], bowlingTeam[oversCompleted % bowlingTeam.length], overRuns, overWickets > 0, { totalRuns, wickets, oversCompleted });

        // Update overs completed
        oversCompleted++;

        // If a wicket fell, replace the batsman
        if (overWickets > 0) {
            batsmen[0] = getNextBatsman(battingTeam, wickets); // Get the next batsman
        }
    }

    // Log final results of the innings
    console.log(`Innings Completed. Total Runs: ${totalRuns}, Wickets: ${wickets}.`);
    return { totalRuns, wickets };
}
