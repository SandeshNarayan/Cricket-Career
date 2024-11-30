class Career {
    constructor(player) {
        this.player = player;
        this.currentLeague = player.league || 5; // Start from league 5 (the lowest)
        this.leagues = {
            5: { name: 'League 5', teams: 5, formats: { t20: 5, odi: 3, test: 2 } },
            4: { name: 'League 4', teams: 10, formats: { t20: 6, odi: 4, test: 3 } },
            3: { name: 'League 3', teams: 15, formats: { t20: 7, odi: 5, test: 3 } },
            2: { name: 'League 2', teams: 20, formats: { t20: 8, odi: 6, test: 4 } },
            1: { name: 'League 1', teams: 25, formats: { t20: 10, odi: 8, test: 5 } }
        };
        this.proLeague = { name: 'Pro League', teams: 10, formats: { t20: 12 } };
        this.international = { name: 'International', teams: 10, formats: { t20: 5, odi: 5, test: 5 } };
    }

    // Decide the next match format
    decideNextMatch() {
        const formats = ['t20', 'odi', 'test'];
        const league = this.getLeague();
        const totalMatches = Object.values(league.formats).reduce((a, b) => a + b, 0);
        const randomMatchNumber = Math.floor(Math.random() * totalMatches);

        let format;
        let cumulativeMatches = 0;
        for (let i = 0; i < formats.length; i++) {
            cumulativeMatches += league.formats[formats[i]];
            if (randomMatchNumber < cumulativeMatches) {
                format = formats[i];
                break;
            }
        }
        return format;
    }

    // Get current league info
    getLeague() {
        if (this.player.isPro) {
            return this.proLeague;
        } else if (this.player.isInternational) {
            return this.international;
        }
        return this.leagues[this.currentLeague];
    }

    // Promotion logic based on performance
    checkPromotion() {
        const promotionThreshold = this.currentLeague > 1 ? 2000 : 3000; // Higher threshold for lower leagues
        const playerPerformance = this.calculatePerformance();

        if (playerPerformance >= promotionThreshold && this.currentLeague > 1) {
            this.currentLeague--;
            this.player.league = this.currentLeague;
            console.log(`Player promoted to ${this.getLeague().name}`);
        } else if (playerPerformance >= 4000 && !this.player.isPro) {
            this.player.isPro = true;
            console.log('Player promoted to Pro League!');
        } else if (playerPerformance >= 5000 && !this.player.isInternational) {
            this.player.isInternational = true;
            console.log('Player promoted to International Cricket!');
        }
    }

    // Calculate performance based on recent matches
    calculatePerformance() {
        const { matchesPlayed, runsScored, wicketsTaken, centuries, halfCenturies } = this.player.stats;
        const battingScore = runsScored + (centuries * 100) + (halfCenturies * 50);
        const bowlingScore = wicketsTaken * 25;
        return (battingScore + bowlingScore) / matchesPlayed; // A rough performance score
    }

    // Simulate player's stats for next match
    updatePlayerStats(matchResult) {
        const stats = this.player.stats;
        
        // Update stats based on match result
        if (matchResult.batting) {
            stats.runsScored += matchResult.runs;
            if (matchResult.runs >= 100) {
                stats.centuries++;
            } else if (matchResult.runs >= 50) {
                stats.halfCenturies++;
            }
        }

        if (matchResult.bowling) {
            stats.wicketsTaken += matchResult.wickets;
        }

        stats.matchesPlayed++;
        
        // Calculate batting average
        if (stats.matchesPlayed > 0) {
            stats.average = stats.runsScored / stats.matchesPlayed;
        }

        this.checkPromotion();
    }

    // Get detailed player stats
    getPlayerStats() {
        return {
            matchesPlayed: this.player.stats.matchesPlayed,
            runsScored: this.player.stats.runsScored,
            wicketsTaken: this.player.stats.wicketsTaken,
            centuries: this.player.stats.centuries,
            halfCenturies: this.player.stats.halfCenturies,
            average: this.player.stats.average.toFixed(2),
            league: this.getLeague().name
        };
    }

    // Simulate the next match (without actual gameplay logic)
    simulateNextMatch() {
        const format = this.decideNextMatch();
        const matchResult = this.simulateMatchResult(format);
        this.updatePlayerStats(matchResult);

        return {
            format: format.toUpperCase(),
            matchResult: matchResult,
            updatedStats: this.getPlayerStats()
        };
    }

    // Simulate a match result based on player's stats and format
    simulateMatchResult(format) {
        const battingPerformance = Math.floor(Math.random() * this.player.batting.powerHitting.value);
        const bowlingPerformance = Math.floor(Math.random() * this.player.bowling.control.value);

        return {
            format: format,
            batting: format !== 'test' ? true : Math.random() > 0.5, // Randomly decide if player batted
            bowling: format !== 'test' ? true : Math.random() > 0.5, // Randomly decide if player bowled
            runs: battingPerformance,
            wickets: bowlingPerformance,
        };
    }
}

// Example usage
const player = {
    name: "John Doe",
    age: 10,
    league: 5,
    isPro: false,
    isInternational: false,
    stats: {
        matchesPlayed: 0,
        runsScored: 0,
        wicketsTaken: 0,
        centuries: 0,
        halfCenturies: 0,
        average: 0
    },
    batting: {
        powerHitting: { value: 50, min: 0 },
        precision: { value: 40, min: 0 },
        timing: { value: 45, min: 0 },
        runningBetweenWickets: { value: 30, min: 0 }
    },
    bowling: {
        swing: { value: 30, min: 0 },
        spin: { value: 20, min: 0 },
        control: { value: 50, min: 0 },
        pace: { value: 85, min: 80 },
        variation: { value: 35, min: 0 }
    }
};

const career = new Career(player);
const nextMatch = career.simulateNextMatch();
console.log(nextMatch);
