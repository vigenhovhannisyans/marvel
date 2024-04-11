import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'mrl-container-data',
  standalone: true,
  imports: [ButtonComponent, LoaderComponent, CommonModule],
  templateUrl: './container-data.component.html',
  styleUrl: './container-data.component.scss'
})
export class ContainerDataComponent {
  @Input()
  public dataToShow$!: Observable<any>;

  @Input()
  public title!: string;
}
