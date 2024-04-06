import { createAction, props } from "@ngrx/store";
import { CharacterI } from "../../interfaces/characters/characters";

export const addCharacters = createAction('[Add character]', props<{character: CharacterI[]}>())