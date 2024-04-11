import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, delay } from 'rxjs';
import { IconComponent } from '../shared/icon/icon.component';
import { MarvelComponent } from '../shared/marvel/marvel.component';
import { CharactersService } from '../../core/services/characters/characters.service';
import { ApiDataI } from '../../core/interfaces/api-data';
import { CharacterI } from '../../core/interfaces/characters/characters';
import { ButtonComponent } from '../shared/button/button.component';
import { ShieldComponent } from '../shared/shield/shield.component';
import { ComicsService } from '../../core/services/comics/comics.service';
import { LoaderComponent } from '../shared/loader/loader.component';
import { ComicsI } from '../../core/interfaces/comics/comics';
import { SpidermanComponent } from '../shared/spiderman/spiderman.component';
import { SeriesService } from '../../core/services/series/series.service';
import { SeriesI } from '../../core/interfaces/series/series';
import { ContainerDataComponent } from '../shared/container-data/container-data.component';

@Component({
  selector: 'mrl-home',
  standalone: true,
  imports: [IconComponent, MarvelComponent, LoaderComponent, ShieldComponent, SpidermanComponent, ContainerDataComponent, ButtonComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly characterService: CharactersService = inject(CharactersService);
  private readonly comicsService: ComicsService = inject(ComicsService);
  private readonly seriesService: SeriesService = inject(SeriesService);

  public characters$: Observable<ApiDataI<CharacterI[]>> = new Observable<ApiDataI<CharacterI[]>>();
  public comics$: Observable<ApiDataI<ComicsI[]>> = new Observable<ApiDataI<ComicsI[]>>();
  public series$: Observable<ApiDataI<SeriesI[]>> = new Observable<ApiDataI<SeriesI[]>>();

  public ngOnInit(): void {
      this.characters$ = this.characterService.getCharacters({limit: 5});
      this.comics$ = this.comicsService.getComics({limit: 5});
      this.series$ = this.seriesService.getSeries({limit: 5})
  }
}
