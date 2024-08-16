import { User } from "./models.ts";
import { RateLimiter } from "./rateLimiter.ts";


const rateLimiter = new RateLimiter(1000);

async function fetchFromSleeperAPI<T>(endpoint: string, options = {}):Promise<T> {
    const response = await fetch(`https://api.sleeper.app/v1/${endpoint}`, options);
    
    return await response.json();
}

export async function getPlayerData(playerId: string) {
    return rateLimiter.enqueue(() => fetchFromSleeperAPI(`players/${playerId}`));
}


export async function getGameData(gameId: string) {
    return rateLimiter.enqueue(() => fetchFromSleeperAPI(`games/${gameId}`));
}


export async function getStats(statType: string) {
    return rateLimiter.enqueue(() => fetchFromSleeperAPI(`stats/${statType}`));
}


export async function getTeamData(teamId: string) {
    return rateLimiter.enqueue(() => fetchFromSleeperAPI(`teams/${teamId}`));
}

export async function getManagerData(userID: string):Promise<User> {
    return rateLimiter.enqueue(() => fetchFromSleeperAPI<User>(`user/${userID}`))
}
