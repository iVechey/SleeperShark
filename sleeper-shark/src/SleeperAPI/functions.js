// Usage Example
const rateLimiter = new RateLimiter(1000);

function fetchFromSleeperAPI(endpoint, options = {}) {
    return fetch(`https://api.sleeper.app/${endpoint}`, options)
        .then(response => response.json());
}

function getPlayerData(playerId) {
    return rateLimiter.enqueue(() => fetchFromSleeperAPI(`players/${playerId}`));
}


function getGameData(gameId) {
    return rateLimiter.enqueue(() => fetchFromSleeperAPI(`games/${gameId}`));
}


function getStats(statType) {
    return rateLimiter.enqueue(() => fetchFromSleeperAPI(`stats/${statType}`));
}


function getTeamData(teamId) {
    return rateLimiter.enqueue(() => fetchFromSleeperAPI(`teams/${teamId}`));
}
