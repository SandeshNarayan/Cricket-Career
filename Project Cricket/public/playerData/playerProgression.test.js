// playerProgression.test.js
import Player from './Player';
import PlayerProgression from './PlayerProgression';

test('Player skills should improve based on match performance', () => {
    const player = new Player('Kane Williamson', 30, 'Batsman', { batting: { powerHitting: 70, precision: 65 } });
    const playerProgression = new PlayerProgression(player);

    playerProgression.improveSkills(80, 0);  // Simulate player scoring 80 runs
    expect(player.skills.batting.powerHitting.value).toBeGreaterThan(70); // Power hitting should increase
});
