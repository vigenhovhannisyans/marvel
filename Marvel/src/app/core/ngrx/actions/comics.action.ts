import { createAction, props } from "@ngrx/store";
import { ComicsI } from "../../interfaces/comics/comics";

export const addComics = createAction('[add comics]', props<{comics: ComicsI[]}>());
