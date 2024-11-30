// Example data population for standings and stats
const teams = [
    { rank: 1, name: 'Team A', matchesPlayed: 10, wins: 8, losses: 2, points: 16, nrr: 0.85 },
    { rank: 2, name: 'Team B', matchesPlayed: 10, wins: 7, losses: 3, points: 14, nrr: 0.75 },
    // Add more teams
];

const players = [
    { name: 'Player 1', team: 'Team A', role: 'Batsman', runs: 350, wickets: 0, strikeRate: 145.8, economyRate: null },
    { name: 'Player 2', team: 'Team B', role: 'Bowler', runs: 75, wickets: 15, strikeRate: null, economyRate: 6.5 },
    // Add more players
];

// Populate league standings
function populateStandings() {
    const standingsBody = document.getElementById('standings-body');
    standingsBody.innerHTML = ''; // Clear previous data

    teams.forEach((team) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${team.rank}</td>
            <td>${team.name}</td>
            <td>${team.matchesPlayed}</td>
            <td>${team.wins}</td>
            <td>${team.losses}</td>
            <td>${team.points}</td>
            <td>${team.nrr}</td>
        `;
        standingsBody.appendChild(row);
    });
}

// Populate player stats
function populatePlayerStats() {
    const statsBody = document.getElementById('player-stats-body');
    statsBody.innerHTML = ''; // Clear previous data

    players.forEach((player) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.team}</td>
            <td>${player.role}</td>
            <td>${player.runs !== null ? player.runs : '-'}</td>
            <td>${player.wickets !== null ? player.wickets : '-'}</td>
            <td>${player.strikeRate !== null ? player.strikeRate : '-'}</td>
            <td>${player.economyRate !== null ? player.economyRate : '-'}</td>
        `;
        statsBody.appendChild(row);
    });
}

// Call these functions on page load
populateStandings();
populatePlayerStats();
