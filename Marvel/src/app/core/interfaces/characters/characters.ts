import { AboutI } from "../about";
import { ThumbnailI } from "../thumbnail";
import { UrlI } from "../url";

export interface CharacterI {
    id: number;
    modified: string;
    name: string;
    resourceURL: string;
    description: string;
    comics: AboutI<ComicsItemI[]>;
    events: AboutI<ComicsItemI>;
    series: AboutI<ComicsItemI>;
    stories: AboutI<ComicsItemI>;
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




