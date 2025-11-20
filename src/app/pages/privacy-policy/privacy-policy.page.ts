import { Component } from '@angular/core';
import { MainLayout } from "../../layout/main-layout/main-layout";
import { TranslateModule } from '@ngx-translate/core';
import { SHARED_UI } from '../../shared';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [...SHARED_UI, MainLayout, TranslateModule],
  templateUrl: './privacy-policy.page.html',
  styleUrl: './privacy-policy.page.scss',
})
export class PrivacyPolicyPage {

}
