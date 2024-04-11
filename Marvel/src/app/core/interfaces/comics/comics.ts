import { AboutI } from "../about";
import { CharacterI } from "../characters/characters";
import { CreatorsI } from "../creators/creators";
import { DatesI } from "../dates";
import { PracesI } from "../prices";
import { ThumbnailI } from "../thumbnail";
import { UrlI } from "../url";
import { ComicsVariantI } from "../variants";

export interface ComicsI {
    characters: AboutI<CharacterI>;
    collectedIssues: string[];
    collections: string[];
    description: string;
    diamondCode: string;
    digitalId: number;
    ean: string;
    format: string;
    id: number;
    images: string[];
    isbn: string;
    issn: string;
    issueNumber: number;
    modified: string;
    pageCount: number;
    resourceURI: string;
    textObjects: string[];
    title: string;
    upc: string;
    variantDescription: string;
    variants: ComicsVariantI[];
    urls: UrlI[];
    thumbnail: ThumbnailI;
    creators: AboutI<CreatorsI[]>;
    events: AboutI<[]>;
    dates: DatesI[];
    prices: PracesI[];

}
export interface InitialComicsI {
    comics: ComicsI[] | undefined
}

