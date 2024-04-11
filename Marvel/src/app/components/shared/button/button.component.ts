import { Component, Input } from '@angular/core';
import { ButtonType } from '../../../core/enums/button';

@Component({
  selector: 'mrl-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input()
  public type: ButtonType = ButtonType.PRIMARY

  @Input()
  public className: string = '';
}
