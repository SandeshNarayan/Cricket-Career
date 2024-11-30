let currentOver = 0;
let balls = 0;

function simulateBall() {
    // Simulate the result of a ball (e.g., runs, wicket, etc.)
    const ballOutcome = match.simulateBallOutcome(); // Use the logic from the Match class
    const commentaryList = document.getElementById('ball-by-ball-commentary');

    // Update score and commentary
    const commentary = document.createElement('li');
    commentary.textContent = `Ball ${balls + 1}: ${ballOutcome.result} - ${ballOutcome.runs || ballOutcome.description}`;
    commentaryList.appendChild(commentary);

    balls++;
    if (balls % 6 === 0) currentOver++;
    updateScorecard();

    // Check if match is over
    if (isMatchOver()) {
        endMatch();
    }
}

function updateScorecard() {
    // Update scorecard display
    document.getElementById('team1-score').textContent = `Team A: ${team1Score}/${team1Wickets} (${currentOver} overs)`;
    document.getElementById('team2-score').textContent = `Team B: ${team2Score}/${team2Wickets} (${currentOver} overs)`;
}

function endMatch() {
    document.getElementById('match-summary').style.display = 'block';
    document.getElementById('match-result').textContent = 'Team A won by 10 runs!';
    document.getElementById('simulate-ball').disabled = true; // Disable further ball simulations
}

document.getElementById('simulate-ball').addEventListener('click', simulateBall);
document.getElementById('end-match').addEventListener('click', endMatch);
