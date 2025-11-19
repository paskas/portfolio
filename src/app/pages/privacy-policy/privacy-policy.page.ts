import { Component } from '@angular/core';
import { MainLayout } from "../../layout/main-layout/main-layout";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [MainLayout, TranslateModule],
  templateUrl: './privacy-policy.page.html',
  styleUrl: './privacy-policy.page.scss',
})
export class PrivacyPolicyPage {

}
