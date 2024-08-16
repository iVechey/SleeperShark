export type User = {
    avatar: string,
    display_name: string,
    user_id: string,
    username: string
}


export interface GetUserResponse {
    avatar: string;
    cookies: string | null;
    created: string | null;
    currencies: string | null;
    data_updated: string | null;
    deleted: string | null;
    display_name: string;
    email: string | null;
    is_bot: boolean
    metadata: string | null;
    notifications: string | null;
    pending: string | null;
    phone: string | null;
    real_name: string | null;
    solicitable: string | null;
    summoner_name: string | null;
    summoner_region: string | null;
    token: string | null;
    user_id: string;
    username: string;
    verification: string | null;
}
