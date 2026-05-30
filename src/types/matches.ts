export interface Group {
    name:    string;
    matches: Match[];
}

export interface Match {
    round:  string;
    date:   Date;
    time:   string;
    team1:  string;
    team2:  string;
    score:  Score;
    goals1: any[];
    goals2: Goals2[];
    group:  string;
    ground: string;
}

export interface Goals2 {
    name:     string;
    minute:   number;
    penalty?: boolean;
    offset?:  number;
}

export interface Score {
    ft: number[];
    ht: number[];
}
