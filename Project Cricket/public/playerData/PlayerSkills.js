class PlayerSkills {
    constructor(role) {
        this.role = role;
        this.skills = this.initializeSkills(role);
    }

    // Initialize skills based on the player role
    initializeSkills(role) {
        switch (role.toLowerCase()) {
            case 'batsman':
                return this.batsmanSkills();
            case 'bowler':
                return this.bowlerSkills();
            case 'allrounder':
                return { ...this.batsmanSkills(), ...this.bowlerSkills() };
            case 'keeper':
                return { ...this.batsmanSkills(), keeping: this.keepingSkills() };
            default:
                return {};
        }
    }

    // Define skills for batsmen
    batsmanSkills() {
        return {
            batting: {
                powerHitting: { value: Math.floor(Math.random() * 100) }, // Random skills for simplicity
                precision: { value: Math.floor(Math.random() * 100) },
                timing: { value: Math.floor(Math.random() * 100) },
                runningBetweenWickets: { value: Math.floor(Math.random() * 100) }
            }
        };
    }

    // Define skills for bowlers
    bowlerSkills() {
        return {
            bowling: {
                swing: { value: Math.floor(Math.random() * 100) },
                spin: { value: Math.floor(Math.random() * 100) },
                control: { value: Math.floor(Math.random() * 100) },
                pace: { value: Math.floor(Math.random() * 100) },
                variation: { value: Math.floor(Math.random() * 100) }
            }
        };
    }

    // Define keeping skills
    keepingSkills() {
        return {
            reflexes: { value: Math.floor(Math.random() * 100) },
            catching: { value: Math.floor(Math.random() * 100) },
            stumping: { value: Math.floor(Math.random() * 100) },
            agility: { value: Math.floor(Math.random() * 100) }
        };
    }

    // Method to get player skills
    getSkills() {
        return this.skills;
    }

    // Method to update specific skill values
    updateSkill(skillCategory, skillName, newValue) {
        if (this.skills[skillCategory] && this.skills[skillCategory][skillName]) {
            this.skills[skillCategory][skillName].value = newValue;
        } else {
            console.log(`Skill ${skillName} not found in category ${skillCategory}`);
        }
    }
}

export default PlayerSkills;
