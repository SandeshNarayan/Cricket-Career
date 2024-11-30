import { players } from './players.js';

// Function to update and display the scorecard
export function updateScorecard(inningData) {
    const scorecardDiv = document.getElementById('scorecard');
    scorecardDiv.innerHTML = ''; // Clear previous scorecard

    // Displaying runs and wickets
    inningData.forEach(inning => {
        const inningDiv = document.createElement('div');
        inningDiv.innerHTML = `
            <h3>Inning: ${inning.inningNumber}</h3>
            <p>Runs: ${inning.runs}</p>
            <p>Wickets: ${inning.wickets}</p>
        `;

        // Display detailed player statistics
        inning.players.forEach(playerIndex => {
            const player = players[playerIndex];
            inningDiv.innerHTML += `
                <p>${player.name}: ${player.experience.performanceHistory.value} runs, ${player.experience.matchesPlayed.value} matches</p>
            `;
        });

        scorecardDiv.appendChild(inningDiv);
    });
}
