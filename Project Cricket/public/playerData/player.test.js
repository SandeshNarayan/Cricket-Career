// player.test.js
import Player from './Player';
import PlayerSkills from './PlayerSkills';

test('Player should initialize with correct skills and age', () => {
    const skills = new PlayerSkills({
        batting: { powerHitting: 70, precision: 65, timing: 60 },
        bowling: { pace: 50, swing: 45, control: 55 }
    });

    const player = new Player('Virat Kohli', 32, 'Batsman', skills);

    expect(player.name).toBe('Virat Kohli');
    expect(player.age).toBe(32);
    expect(player.skills.batting.powerHitting.value).toBe(70);
});

test('Player should improve batting precision when trained', () => {
    const skills = new PlayerSkills({
        batting: { powerHitting: 60, precision: 50, timing: 55 }
    });

    const player = new Player('Steve Smith', 30, 'Batsman', skills);
    player.train('batting', 'precision', 5);

    expect(player.skills.batting.precision.value).toBe(55); // Training adds 5 points
});
