import { AboutI } from "../about";
import { ComicsI } from "../comics/comics";
import { ComicsVariantI } from "../variants";

export interface SeriesI extends ComicsI {
    comics: AboutI<ComicsVariantI[]>
}