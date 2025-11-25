import { Component } from '@angular/core';
import { SHARED_UI } from '..';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...SHARED_UI, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isBurgerOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isBurgerOpen = false;
        document.body.classList.remove('no-scroll');
      });
  }

  toggleBurgerMenu(): void {
    this.isBurgerOpen = true;
    document.body.classList.add('no-scroll');
  }

  closeBurgerMenu(): void {
    this.isBurgerOpen = false;
    document.body.classList.remove('no-scroll');
  }
}
