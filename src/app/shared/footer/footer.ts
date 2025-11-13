import { Component } from '@angular/core';
import { SHARED_UI } from '..';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [...SHARED_UI, TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer { }
