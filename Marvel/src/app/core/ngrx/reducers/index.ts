import { ActionReducerMap } from "@ngrx/store";
import { characterReducer } from "./character.reducer";

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
    characters: characterReducer
}