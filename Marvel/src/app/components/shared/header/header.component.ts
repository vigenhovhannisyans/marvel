import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RouterI } from '../../../core/interfaces/router';
import { Routers } from '../../../core/constants/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mrl-header',
  standalone: true,
  imports: [IconComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public readonly routers: RouterI[] = Routers;
  public isShow: boolean = false;

  public toggleButton(): void {
    this.isShow = !this.isShow;
  }
}
