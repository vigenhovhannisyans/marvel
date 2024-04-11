import { createReducer, on } from "@ngrx/store";
import { InitialComicsI } from "../../interfaces/comics/comics";
import { addComics } from "../actions/comics.action";

const comicsInitial: InitialComicsI = {
    comics: undefined
}

export const comicsReducer = createReducer(comicsInitial,
    on(addComics, (state, action) => ({ ...state, comics: action.comics }))
)
