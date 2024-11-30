// t20.js: Simulates a T20 cricket match and manages player statistics

// Player object structure (this should ideally be imported or defined elsewhere)
let player = {
    batting: {
        powerHitting: { value: 50, min: 0 },
        precision: { value: 50, min: 0 },
        timing: { value: 50, min: 0 },
        runningBetweenWickets: { value: 50, min: 0 }
    },
    bowling: {
        swing: { value: 50, min: 0 },
        spin: { value: 50, min: 0 },
        control: { value: 50, min: 0 },
        pace: { value: 80, min: 80 },
        variation: { value: 50, min: 0 }
    },
    stats: {
        runsScored: 0,
        wicketsTaken: 0,
        centuries: 0,
        halfCenturies: 0,
        average: 0,
        matchesPlayed: 0
    }
};

// Match parameters
const totalOvers = 20;
let teamScore = 0;
let wicketsLost = 0;
let ballsBowled = 0;
const scorecard = [];

// Function to simulate the T20 match
function simulateT20Match() {
    for (let over = 0; over < totalOvers; over++) {
        for (let ball = 0; ball < 6; ball++) {
            if (wicketsLost >= 10) break; // End if all wickets are lost
            const ballOutcome = simulateBall();
            updateScorecard(ballOutcome);
            teamScore += ballOutcome.runs;
            if (ballOutcome.isWicket) wicketsLost++;
            ballsBowled++;
        }
        if (wicketsLost >= 10) break; // End if all wickets are lost
    }
    finalizeMatch();
}

// Function to simulate a single ball
function simulateBall() {
    const runs = calculateRuns();
    const isWicket = Math.random() < (player.bowling.control.value / 100) ? true : false; // Wicket chance based on bowler's control
    return { runs, isWicket };
}

// Function to calculate runs based on player attributes and match conditions
function calculateRuns() {
    let runs = 0;
    const baseProbability = Math.random(); // Random chance for runs
    const battingAbility = player.batting.powerHitting.value / 100; // Player's power hitting ability

    // Determine runs based on batting ability
    if (baseProbability < battingAbility * 0.1) {
        runs = 6; // Hit a six
    } else if (baseProbability < battingAbility * 0.3) {
        runs = 4; // Hit a four
    } else if (baseProbability < battingAbility * 0.5) {
        runs = 1; // Single
    } else if (baseProbability < battingAbility * 0.7) {
        runs = 2; // Double
    } // else runs = 0 (dot ball)

    return runs;
}

// Function to update the scorecard after each ball
function updateScorecard(ballOutcome) {
    scorecard.push({
        runs: ballOutcome.runs,
        isWicket: ballOutcome.isWicket,
        totalScore: teamScore + ballOutcome.runs,
        wickets: wicketsLost
    });

    // Update player statistics
    player.stats.runsScored += ballOutcome.runs;
    player.stats.matchesPlayed++;

    if (ballOutcome.runs === 6) {
        console.log("SIX!");
    } else if (ballOutcome.runs === 4) {
        console.log("FOUR!");
    } else if (ballOutcome.isWicket) {
        console.log("Wicket!");
    }
}

// Function to finalize the match
function finalizeMatch() {
    console.log(`Total Score: ${teamScore}/${wicketsLost} in ${totalOvers} overs`);
    displayScorecard();
}

// Function to display the scorecard
function displayScorecard() {
    console.log("Scorecard:");
    console.table(scorecard);
}

// Start the T20 match simulation
document.getElementById('startT20Match').addEventListener('click', simulateT20Match);
