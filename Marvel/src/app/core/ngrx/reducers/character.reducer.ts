import { createReducer, on } from "@ngrx/store";
import { addCharacters } from "../actions/character.action";
import { InitialCharacterStateI } from "../../interfaces/characters/characters";

const characterInitial: InitialCharacterStateI = {
    characters: []
}

export const characterReducer = createReducer(characterInitial,
    on(addCharacters, (state, action) => ({ ...state, characters: action.character }))
)