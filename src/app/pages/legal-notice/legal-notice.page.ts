import { Component } from '@angular/core';
import { MainLayout } from '../../layout/main-layout/main-layout';
import { TranslateModule } from '@ngx-translate/core';
import { SHARED_UI } from '../../shared';

@Component({
  selector: 'app-legal-notice',
  imports: [...SHARED_UI, MainLayout, TranslateModule],
  templateUrl: './legal-notice.page.html',
  styleUrl: './legal-notice.page.scss'
})
export class LegalNoticePage {

}
