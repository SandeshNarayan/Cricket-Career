class PlayerAging {
    constructor(player) {
        this.player = player;
    }

    applyAgingEffects() {
        if (this.player.age > 30) {
            this.player.skills.batting.powerHitting.value -= 0.1 * (this.player.age - 30);
            this.player.skills.bowling.pace.value -= 0.2 * (this.player.age - 30);
        }
        if (this.player.age < 25) {
            this.player.skills.batting.runningBetweenWickets.value += 0.1 * (25 - this.player.age);
        }
    }
}
