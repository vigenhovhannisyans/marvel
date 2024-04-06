import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialCharacterStateI } from "../../interfaces/characters/characters";

export const characterSelector = createFeatureSelector<InitialCharacterStateI>('character');

export const selectCharacter = createSelector(
    characterSelector,
    character => character.characters
)