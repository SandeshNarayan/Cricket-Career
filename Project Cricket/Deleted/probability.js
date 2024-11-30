// Import player skills from player.js
import { player } from '../public/playerData/player.js';

class ProbabilityCalculator {
    constructor(player) {
        this.player = player;
    }

    // Method to calculate batting probability based on skills and match context
    calculateBattingProbability(format, runsScored, oversLeft, runsRequired, targetRunRate) {
        let baseProbability = 0.5; // Base chance of a positive outcome (e.g., scoring runs)

        // Influence based on batting skills
        const powerHitting = this.player.skills.batting.powerHitting.value;
        const precision = this.player.skills.batting.precision.value;
        const timing = this.player.skills.batting.timing.value;
        const runningBetweenWickets = this.player.skills.batting.runningBetweenWickets.value;

        baseProbability += powerHitting * 0.01; // Power hitting improves boundary chances
        baseProbability += precision * 0.01; // Precision improves strike rotation
        baseProbability += timing * 0.015; // Timing affects how well the ball is placed
        baseProbability += runningBetweenWickets * 0.005; // Running improves strike rotation chances

        // Influence of match format (T20, ODI, Test)
        switch (format) {
            case 'T20':
                baseProbability += 0.1; // Higher probability for aggressive play
                break;
            case 'ODI':
                baseProbability += 0.05; // Moderate aggressiveness
                break;
            case 'Test':
                baseProbability -= 0.1; // Defensive play in Test matches
                break;
        }

        // Match situation factors
        if (oversLeft <= 10 && format === 'T20') {
            baseProbability += 0.1; // Players are more aggressive in the final overs of T20
        }

        if (runsRequired && targetRunRate) {
            const currentRunRate = runsScored / (oversLeft ? (20 - oversLeft) : 20);
            if (currentRunRate < targetRunRate) {
                baseProbability += (targetRunRate - currentRunRate) * 0.02; // Boost aggression if required run rate is higher
            }
        }

        // Age effect (assume younger players may have more stamina/aggressiveness)
        if (this.player.age < 25) {
            baseProbability += 0.05; // Younger players are more likely to play aggressively
        }

        // Clamp the probability between 0 and 1
        return Math.min(1, Math.max(0, baseProbability));
    }

    // Method to calculate bowling probability based on skills and match context
    calculateBowlingProbability(format, runsConceded, oversLeft, wicketsTaken, pressureSituation = false) {
        let baseProbability = 0.5; // Base chance of a positive bowling outcome (e.g., taking a wicket)

        // Influence based on bowling skills
        const swing = this.player.skills.bowling.swing.value;
        const spin = this.player.skills.bowling.spin.value;
        const control = this.player.skills.bowling.control.value;
        const pace = this.player.skills.bowling.pace.value;
        const variation = this.player.skills.bowling.variation.value;

        baseProbability += swing * 0.01; // Swing helps in swinging conditions
        baseProbability += spin * 0.01; // Spin helps on spinning tracks
        baseProbability += control * 0.015; // Control reduces runs conceded
        baseProbability += variation * 0.02; // Variation increases chance of confusing batsman

        // Match format influences bowling strategy
        switch (format) {
            case 'T20':
                baseProbability += 0.05; // Aggressive bowling in T20 to reduce runs
                break;
            case 'ODI':
                baseProbability += 0.02; // Balanced bowling in ODI
                break;
            case 'Test':
                baseProbability -= 0.05; // Defensive bowling in Test matches
                break;
        }

        // Effect of overs left (e.g., death overs)
        if (oversLeft <= 10 && format === 'T20') {
            baseProbability += 0.1; // Bowlers take more risks in the final overs
        }

        // Pressure situations (e.g., defending a low score)
        if (pressureSituation) {
            baseProbability += 0.05; // Bowlers may perform better under pressure
        }

        // Wickets taken (more wickets increase confidence)
        baseProbability += wicketsTaken * 0.02;

        // Age effect (younger bowlers tend to have more pace/aggressiveness)
        if (this.player.age < 25) {
            baseProbability += 0.05;
        }

        // Clamp the probability between 0 and 1
        return Math.min(1, Math.max(0, baseProbability));
    }

    // Method to simulate the outcome of a ball based on probabilities
    simulateBallOutcome(format, runsScored, wicketsTaken, oversLeft, runsRequired, targetRunRate) {
        const battingProbability = this.calculateBattingProbability(format, runsScored, oversLeft, runsRequired, targetRunRate);
        const bowlingProbability = this.calculateBowlingProbability(format, runsScored, oversLeft, wicketsTaken);

        const ballOutcome = Math.random(); // Random chance for ball outcome

        if (ballOutcome < battingProbability) {
            return { result: "runs", runs: this.simulateRunScoring() };
        } else if (ballOutcome < bowlingProbability) {
            return { result: "wicket", description: this.simulateWicket() };
        } else {
            return { result: "dot", description: "Dot ball" };
        }
    }

    // Helper function to simulate the number of runs scored based on batting probability
    simulateRunScoring() {
        const runOutcome = Math.random();
        if (runOutcome < 0.05) return 6; // 6 runs (boundary)
        if (runOutcome < 0.15) return 4; // 4 runs (boundary)
        if (runOutcome < 0.4) return 2; // 2 runs
        if (runOutcome < 0.7) return 1; // 1 run
        return 0; // Dot ball
    }

    // Helper function to simulate a wicket event
    simulateWicket() {
        const wicketType = Math.random();
        if (wicketType < 0.4) return "Caught"; // Caught out
        if (wicketType < 0.7) return "Bowled"; // Bowled out
        if (wicketType < 0.85) return "LBW"; // LBW
        return "Run Out"; // Run out
    }
}

// Export the ProbabilityCalculator
export default ProbabilityCalculator;
