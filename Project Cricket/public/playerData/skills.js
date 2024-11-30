// skills.js

class Skills {
    constructor() {
        this.batting = {
            powerHitting: { value: 0, min: 0 },
            precision: { value: 0, min: 0 },
            timing: { value: 0, min: 0 },
            runningBetweenWickets: { value: 0, min: 0 }
        };

        this.bowling = {
            swing: { value: 0, min: 0 },
            spin: { value: 0, min: 0 },
            control: { value: 0, min: 0 },
            pace: { value: 80, min: 80 }, // Example minimum pace value
            variation: { value: 0, min: 0 }
        };

        this.fielding = {
            catching: { value: 0, min: 0 },
            throwingAccuracy: { value: 0, min: 0 },
            agility: { value: 0, min: 0 }
        };

        this.physical = {
            speed: { value: 0, min: 0 },
            strength: { value: 0, min: 0 },
            endurance: { value: 0, min: 0 }
        };

        this.mental = {
            concentration: { value: 0, min: 0 },
            aggression: { value: 0, min: 0 },
            adaptability: { value: 0, min: 0 }
        };

        this.experience = {
            matchesPlayed: { value: 0, min: 0 },
            performanceHistory: { value: 0, min: 0 }
        };

        this.fitness = {
            injuryHistory: { value: 0, min: 0 } // 0 indicates no injury
        };

        this.role = {
            battingRole: { value: "", min: 0 }, // E.g., "opener", "middle-order", etc.
            bowlingRole: { value: "", min: 0 }  // E.g., "fast", "spin", etc.
        };

        this.preferences = {
            shotSelection: { value: "", min: 0 }, // E.g., "cover drive", "pull", etc.
            bowlingStrategy: { value: "", min: 0 } // E.g., "death overs", "powerplay"
        };
    }

    // Method to update a skill value
    updateSkill(category, skill, value) {
        if (this[category] && this[category][skill]) {
            this[category][skill].value = Math.max(value, this[category][skill].min);
        } else {
            console.error('Skill not found!');
        }
    }

    // Method to display all skills
    displaySkills() {
        console.log('Player Skills:');
        console.log('-------------------');
        for (const category in this) {
            console.log(`${category}:`);
            for (const skill in this[category]) {
                console.log(`  ${skill}: ${this[category][skill].value} (min: ${this[category][skill].min})`);
            }
        }
        console.log('-------------------');
    }
}

// Example usage
const playerSkills = new Skills();

// Update some skills
playerSkills.updateSkill('batting', 'powerHitting', 75);
playerSkills.updateSkill('bowling', 'pace', 85);
playerSkills.updateSkill('fielding', 'catching', 70);

// Display the skills
playerSkills.displaySkills();
