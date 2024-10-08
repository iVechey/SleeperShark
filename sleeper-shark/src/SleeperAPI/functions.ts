import { LeagueOverview } from "../Layouts/_models.ts";
import {  GetUserResponse, League, User } from "./models.ts";
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

export async function getUserData(userID: string):Promise<User> {
    const userData = await rateLimiter.enqueue(() => fetchFromSleeperAPI<GetUserResponse>(`user/${userID}`));
    
    return {
        user_id: userData.user_id,
        username: userData.username,
        display_name: userData.display_name,
        avatar: userData.avatar
    }
}

export async function getAllLeaguesForUser(userId: string): Promise<LeagueOverview[]> {

    
    const leagueData = await rateLimiter.enqueue(() => fetchFromSleeperAPI<League[]>(`user/${userId}/leagues/nfl/2024`))

    const leaugeOverviews = leagueData.map(league => ({
        
            id: league.league_id,
            name: league.name,
            ppr: league.scoring_settings.rec,
            te_ppr: league.scoring_settings.bonus_rec_te,
            managers: league.total_rosters
    }))



    return leaugeOverviews
}
