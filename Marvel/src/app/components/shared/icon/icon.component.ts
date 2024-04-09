import { Component, Input } from '@angular/core';

@Component({
  selector: 'mrl-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input()
  public isIcon: boolean = true;

  @Input()
  public className: string = ''

  @Input()
  public name!: string
}
