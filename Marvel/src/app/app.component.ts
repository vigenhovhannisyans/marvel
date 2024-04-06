import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersService } from './core/services/characters/characters.service';
import { Store, select } from '@ngrx/store';
import { selectCharacter } from './core/ngrx/selectors/character.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Marvel';
  private readonly charactersService: CharactersService = inject(CharactersService);
  private readonly store$ = inject(Store);
  public readonly characters$ = this.store$.pipe(select(selectCharacter))

  constructor() {
    this.getCharacters()
  }

  public getCharacters(): any {
    return this.charactersService.getCharacters()
  }
}
