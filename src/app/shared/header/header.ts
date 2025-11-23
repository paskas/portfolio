import { Component } from '@angular/core';
import { SHARED_UI } from '..';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...SHARED_UI, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isBurgerOpen: boolean = false;

  toggleBurgerMenu(): void {
    this.isBurgerOpen = !this.isBurgerOpen;
    if (this.isBurgerOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  closeBurgerMenu(): void {
    this.isBurgerOpen = false;
    document.body.classList.remove('no-scroll');
  }
}
