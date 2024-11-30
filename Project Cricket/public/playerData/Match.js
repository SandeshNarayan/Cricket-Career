import ProbabilityCalculator from './ProbabilityCalculator.js';

class Match {
    constructor(team1, team2, format = 'T20') {
        this.team1 = team1;
        this.team2 = team2;
        this.format = format;
        this.maxOvers = format === 'T20' ? 20 : format === 'ODI' ? 50 : undefined; // No max overs for Test
        this.innings1Score = 0;
        this.innings2Score = 0;
        this.wickets1 = 0;
        this.wickets2 = 0;
        this.probabilityCalculator = new ProbabilityCalculator();
    }

    // Simulate the entire match between team1 and team2
    simulateMatch() {
        console.log(`Starting match: ${this.team1.teamName} vs ${this.team2.teamName}`);
        const innings1 = this.simulateInnings(this.team1, this.team2);
        const innings2 = this.simulateInnings(this.team2, this.team1, innings1.runs); // Team 2 chases Team 1's score

        this.determineWinner(innings1, innings2);
    }

    // Simulate an innings for one team
    simulateInnings(battingTeam, bowlingTeam, target = null) {
        console.log(`\n${battingTeam.teamName} is batting...`);

        let runs = 0;
        let wickets = 0;
        let overs = 0;
        let balls = 0;
        let maxBalls = this.maxOvers * 6; // Total balls in an innings
        const inningsDetails = [];

        while (balls < maxBalls && wickets < 10 && (!target || runs < target)) {
            const ballResult = this.simulateBall(battingTeam, bowlingTeam);
            if (ballResult.result === "runs") {
                runs += ballResult.runs;
            } else if (ballResult.result === "wicket") {
                wickets++;
            }
            balls++;
            if (balls % 6 === 0) {
                overs++;
            }

            inningsDetails.push({
                ball: balls,
                result: ballResult.result,
                runs: ballResult.runs || 0,
                description: ballResult.description || ''
            });

            // If chasing a target, break if target is reached
            if (target && runs >= target) {
                break;
            }
        }

        console.log(`${battingTeam.teamName} scored ${runs}/${wickets} in ${overs} overs.`);

        return { runs, wickets, overs, balls, inningsDetails };
    }

    // Simulate a single ball
    simulateBall(battingTeam, bowlingTeam) {
        const striker = battingTeam.getCurrentBatsman();
        const bowler = bowlingTeam.getCurrentBowler();

        const battingProbability = this.probabilityCalculator.calculateBattingProbability(
            this.format,
            striker.runsScored,
            null, // No overs left needed in single-ball simulation
            null,
            null
        );

        const bowlingProbability = this.probabilityCalculator.calculateBowlingProbability(
            this.format,
            bowler.runsConceded,
            null, // No overs left needed in single-ball simulation
            bowler.wicketsTaken
        );

        // Simulate the ball's outcome
        return this.probabilityCalculator.simulateBallOutcome(
            this.format,
            striker.runsScored,
            bowler.wicketsTaken,
            null,
            null
        );
    }

    // Determine the winner based on the two innings
    determineWinner(innings1, innings2) {
        const team1Score = innings1.runs;
        const team2Score = innings2.runs;

        console.log(`\nFinal Scores:`);
        console.log(`${this.team1.teamName}: ${team1Score}/${innings1.wickets} in ${innings1.overs} overs.`);
        console.log(`${this.team2.teamName}: ${team2Score}/${innings2.wickets} in ${innings2.overs} overs.`);

        if (team1Score > team2Score) {
            console.log(`${this.team1.teamName} wins the match!`);
        } else if (team2Score > team1Score) {
            console.log(`${this.team2.teamName} wins the match!`);
        } else {
            console.log("The match is a tie!");
        }

        // Return the result for league standings
        return {
            team1Score,
            team2Score,
            winner: team1Score > team2Score ? this.team1 : team2Score > team1Score ? this.team2 : null
        };
    }
}

export default Match;
