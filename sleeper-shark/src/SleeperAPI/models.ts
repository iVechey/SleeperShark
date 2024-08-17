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


//not sure what this is yet
interface Settings {
    
    bench_lock: number;
    best_ball: number;
    capacity_override: number;
    commissioner_direct_invite: number;
    daily_waivers: number;
    daily_waivers_days: number;
    daily_waivers_hour: number;
    daily_waivers_last_ran: number;
    disable_adds: number;
    disable_trades: number;
    draft_rounds: number;
    league_average_match: number;
    leg: number;
    max_keepers: number;
    num_teams: number;
    offseason_adds: number;
    pick_trading: number;
    playoff_round_type: number;
    playoff_seed_type: number;
    playoff_teams: number;
    playoff_type: number;
    playoff_week_start: number;
    reserve_allow_cov: number;
    reserve_allow_dnr: number;
    reserve_allow_doubtful: number;
    reserve_allow_na: number;
    reserve_allow_out: number;
    reserve_allow_sus: number;
    reserve_slots: number;
    start_week: number;
    taxi_allow_vets: number;
    taxi_deadline: number;
    taxi_slots: number;
    taxi_years: number;
    trade_deadline: number;
    trade_review_days: number;
    type: number;
    veto_auto_poll: number;
    veto_show_votes: number;
    veto_votes_needed: number;
    waiver_bid_min: number;
    waiver_budget: number;
    waiver_clear_days: number;
    waiver_day_of_week: number;
    waiver_type: number;
}

//not sure what this is yet, adding as i see things and may not even need for this project.
interface ScoringSettings {
        blk_kick: number;
        bonus_pass_yd_300: number;
        bonus_pass_yd_400: number;
        bonus_rec_yd_100: number;
        bonus_rec_yd_200: number;
        bonus_rush_rec_yd_100: number;
        bonus_rush_rec_yd_200: number;
        bonus_rush_yd_100: number;
        bonus_rush_yd_200: number;
        def_st_ff: number;
        def_st_fum_rec: number;
        def_st_td: number;
        bonus_rec_te: number;
        def_td: number;
        ff: number;
        fgm_0_19: number;
        fgm_20_29: number;
        fgm_30_39: number;
        fgm_40_49: number;
        fgm_50p: number;
        fgmiss: number;
        fum: number;
        fum_lost: number;
        fum_rec: number;
        fum_rec_td: number;
        int: number;
        pass_2pt: number;
        pass_cmp_40p: number;
        pass_int: number;
        pass_td: number;
        pass_yd: number;
        pts_allow_0: number;
        pts_allow_1_6: number;
        pts_allow_7_13: number;
        pts_allow_14_20: number;
        pts_allow_21_27: number;
        pts_allow_28_34: number;
        pts_allow_35p: number;
        rec: number;
        rec_2pt: number;
        rec_40p: number;
        rec_td: number;
        rec_yd: number;
        rush_2pt: number;
        rush_40p: number;
        rush_td: number;
        rush_yd: number;
        sack: number;
        safe: number;
        st_ff: number;
        st_fum_rec: number;
        st_td: number;
        xpm: number;
        xpmiss: number;
}

export type RosterPosition =
    | "QB"   // Quarterback
    | "RB"   // Running Back
    | "WR"   // Wide Receiver
    | "TE"   // Tight End
    | "FLEX" // Flex position
    | "K"    // Kicker
    | "DEF"  // Defense
    | "DL" //Defensive Lineman
    | "LB" //Linebacker
    | "IDP_FLEX" //Defensive Flex
    | "BN"  // Bench

export interface LeagueMetaData {
    auto_continue: boolean;
    keeper_deadline: string;
    latest_league_winner_roster_id: string
}



export interface League {
    total_rosters: number;
    status: "pre_draft" //not sure about all of their other statuses
    sport: "nfl" //Right now only nfl
    settings: Settings; // Use the Settings type defined above
    season_type: "regular" | "postseason"; // Not sure of all their options
    season: string; //year
    scoring_settings: ScoringSettings; // Use the ScoringSettings type defined above
    roster_positions: RosterPosition[]
    previous_league_id: string;
    name: string;
    league_id: string;
    draft_id: string;
    avatar: string;
}
