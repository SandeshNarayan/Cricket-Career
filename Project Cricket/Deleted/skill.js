class PlayerSkills {
    constructor(playerRole) {
        this.playerRole = playerRole;
        this.initializeSkills();
        this.generateSkillsByRole();
    }

    initializeSkills() {
        this.batting = {
            powerHitting: { value: 0, min: 20 },
            precision: { value: 0, min: 20 },
            timing: { value: 0, min: 20 },
            runningBetweenWickets: { value: 0, min: 30 },
            technique: { value: 0, min: 20 },
            footwork: { value: 0, min: 20 },
            shotSelection: { value: 0, min: 20 }
        };

        this.bowling = {
            swing: { value: 0, min: 20 },
            spin: { value: 0, min: 20 },
            control: { value: 0, min: 30 },
            pace: { value: 0, min: 60 },
            variation: { value: 0, min: 20 },
            consistency: { value: 0, min: 30 },
            yorkerAccuracy: { value: 0, min: 20 }
        };

        this.fielding = {
            catching: { value: 0, min: 40 },
            throwingAccuracy: { value: 0, min: 40 },
            groundFielding: { value: 0, min: 40 },
            agility: { value: 0, min: 30 },
            reflexes: { value: 0, min: 30 }
        };

        this.physical = {
            speed: { value: 0, min: 30 },
            strength: { value: 0, min: 30 },
            endurance: { value: 0, min: 40 },
            flexibility: { value: 0, min: 30 },
            recovery: { value: 0, min: 40 }
        };

        this.mental = {
            concentration: { value: 0, min: 40 },
            pressure: { value: 0, min: 40 },
            aggression: { value: 0, min: 20 },
            adaptability: { value: 0, min: 30 },
            leadership: { value: 0, min: 20 },
            temperament: { value: 0, min: 30 }
        };

        this.experience = {
            matchesPlayed: { value: 0, min: 0 },
            performanceConsistency: { value: 0, min: 20 },
            tournamentExperience: { value: 0, min: 0 },
            situationalAwareness: { value: 0, min: 30 }
        };

        this.specializations = {
            powerplay: { value: 0, min: 0 },
            deathOvers: { value: 0, min: 0 },
            middleOvers: { value: 0, min: 0 },
            finisher: { value: 0, min: 0 }
        };
    }

    generateSkillsByRole() {
        switch (this.playerRole) {
            case 'batsman':
                this.generateBatsmanSkills();
                break;
            case 'bowler':
                this.generateBowlerSkills();
                break;
            case 'allrounder':
                this.generateAllrounderSkills();
                break;
            case 'keeper':
                this.generateKeeperSkills();
                break;
            default:
                this.generateBalancedSkills();
        }
    }

    generateRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateBatsmanSkills() {
        // High batting skills
        Object.keys(this.batting).forEach(skill => {
            this.batting[skill].value = this.generateRandomValue(
                Math.max(60, this.batting[skill].min),
                95
            );
        });

        // Moderate fielding skills
        Object.keys(this.fielding).forEach(skill => {
            this.fielding[skill].value = this.generateRandomValue(
                this.fielding[skill].min,
                80
            );
        });

        // Specializations based on random batting position
        this.generateBattingSpecializations();
    }

    generateBowlerSkills() {
        // High bowling skills
        Object.keys(this.bowling).forEach(skill => {
            this.bowling[skill].value = this.generateRandomValue(
                Math.max(60, this.bowling[skill].min),
                95
            );
        });

        // Generate bowling style and corresponding attributes
        this.generateBowlingStyle();
    }

    generateAllrounderSkills() {
        // Good balance of batting and bowling
        Object.keys(this.batting).forEach(skill => {
            this.batting[skill].value = this.generateRandomValue(
                Math.max(50, this.batting[skill].min),
                85
            );
        });

        Object.keys(this.bowling).forEach(skill => {
            this.bowling[skill].value = this.generateRandomValue(
                Math.max(50, this.bowling[skill].min),
                85
            );
        });

        // Generate both batting and bowling specializations
        this.generateBattingSpecializations();
        this.generateBowlingStyle();
    }

    generateKeeperSkills() {
        // High keeping-related skills
        this.fielding.catching.value = this.generateRandomValue(70, 95);
        this.fielding.reflexes.value = this.generateRandomValue(70, 95);

        // Good batting skills
        Object.keys(this.batting).forEach(skill => {
            this.batting[skill].value = this.generateRandomValue(
                Math.max(50, this.batting[skill].min),
                85
            );
        });
    }

    generateBowlingStyle() {
        const bowlingStyles = ['pace', 'spin'];
        const style = bowlingStyles[Math.floor(Math.random() * bowlingStyles.length)];

        if (style === 'pace') {
            this.bowling.pace.value = this.generateRandomValue(130, 150); // km/h
            this.bowling.swing.value = this.generateRandomValue(60, 90);
            this.specializations.deathOvers.value = this.generateRandomValue(60, 90);
        } else {
            this.bowling.spin.value = this.generateRandomValue(70, 95);
            this.bowling.variation.value = this.generateRandomValue(70, 95);
            this.specializations.middleOvers.value = this.generateRandomValue(70, 90);
        }
    }

    generateBattingSpecializations() {
        const positions = ['opener', 'top-order', 'middle-order', 'finisher'];
        const position = positions[Math.floor(Math.random() * positions.length)];

        switch (position) {
            case 'opener':
                this.specializations.powerplay.value = this.generateRandomValue(70, 95);
                this.batting.technique.value = Math.max(this.batting.technique.value, this.generateRandomValue(70, 90));
                break;
            case 'finisher':
                this.specializations.finisher.value = this.generateRandomValue(70, 95);
                this.batting.powerHitting.value = Math.max(this.batting.powerHitting.value, this.generateRandomValue(70, 95));
                break;
        }
    }

    generateBalancedSkills() {
        Object.keys(this.batting).forEach(skill => {
            this.batting[skill].value = this.generateRandomValue(
                this.batting[skill].min,
                70
            );
        });

        Object.keys(this.bowling).forEach(skill => {
            this.bowling[skill].value = this.generateRandomValue(
                this.bowling[skill].min,
                70
            );
        });
    }

    getSkillsSummary() {
        return {
            role: this.playerRole,
            battingAverage: this.calculateAverageSkills(this.batting),
            bowlingAverage: this.calculateAverageSkills(this.bowling),
            fieldingAverage: this.calculateAverageSkills(this.fielding),
            physicalAverage: this.calculateAverageSkills(this.physical),
            mentalAverage: this.calculateAverageSkills(this.mental),
            specializationStrengths: this.getTopSpecializations()
        };
    }

    calculateAverageSkills(category) {
        const values = Object.values(category).map(skill => skill.value);
        return (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1);
    }

    getTopSpecializations() {
        return Object.entries(this.specializations)
            .filter(([_, { value }]) => value > 70)
            .map(([name, { value }]) => ({ name, value }))
            .sort((a, b) => b.value - a.value);
    }
}

// Example usage:
// const batsmanSkills = new PlayerSkills('batsman');
// console.log(batsmanSkills.getSkillsSummary());

export default PlayerSkills;