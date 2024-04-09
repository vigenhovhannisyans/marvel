import { Component } from '@angular/core';
import { IconComponent } from '../shared/icon/icon.component';
import { MarvelComponent } from '../shared/marvel/marvel.component';

@Component({
  selector: 'mrl-home',
  standalone: true,
  imports: [IconComponent, MarvelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
