import { ThumbnailI } from "../thumbnail";
import { UrlI } from "../url";

export interface CharacterI {
    id: number;
    modified: string;
    name: string;
    resourceURL: string;
    description: string;
    comics: AboutI[];
    events: AboutI;
    series: AboutI;
    stories: AboutI;
    thumbnail: ThumbnailI;
    urls: UrlI[];
}

export interface InitialCharacterStateI {
    characters: CharacterI[] | undefined
}

interface ComicsItemI {
    name: string;
    resourceURL: string;
}

interface AboutI {
    available: number;
    collectionURL: string;
    returned: number;
    items: ComicsItemI[]
}


