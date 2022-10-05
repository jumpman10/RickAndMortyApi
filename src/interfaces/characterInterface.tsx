export interface CharacterPaginatedResponse{
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

export interface Result {
    id:       number;
    name:     string;
    status:   Status;
    species:  string;
    type:     string;
    gender?:   Gender;
    origin?:   Location;
    location?: Location;
    image?:    string;
    episode?:  string[];
    url?:      string;
    created?:  string;
}
export interface SimpleCharacter {
    id:       number;
    name:     string;
    status:   Status;
    species:  string;
    gender:   Gender|undefined;
    image:    any;
}
export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
export interface Episodes {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    string;
}


