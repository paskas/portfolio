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
export class Header { }
