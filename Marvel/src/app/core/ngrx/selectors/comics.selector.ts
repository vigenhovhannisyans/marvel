import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialComicsI } from "../../interfaces/comics/comics";

export const characterSelector = createFeatureSelector<InitialComicsI>('comics');

export const selectCharacter = createSelector(
    characterSelector,
    comics => comics.comics
)