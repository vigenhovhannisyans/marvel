import { ActionReducerMap } from "@ngrx/store";
import { characterReducer } from "./character.reducer";
import { comicsReducer } from "./comics.reducer";

export interface AppState { }

export const reducers: ActionReducerMap<AppState> = {
    characters: characterReducer,
    comics: comicsReducer
}
