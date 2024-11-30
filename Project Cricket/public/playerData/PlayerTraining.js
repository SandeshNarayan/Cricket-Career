class PlayerTraining {
    constructor(player) {
        this.player = player;
    }

    // Method to simulate training sessions
    train(skill, points) {
        if (skill === 'batting') {
            this.player.skills.batting.precision.value += points;
        } else if (skill === 'bowling') {
            this.player.skills.bowling.variation.value += points;
        }
        this.player.trainingPoints -= points; // Deduct training points
    }

    // Generate random training points per season
    generateTrainingPoints() {
        this.player.trainingPoints = Math.floor(Math.random() * 10) + 5;
    }
}
