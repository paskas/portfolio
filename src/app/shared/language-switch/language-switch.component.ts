import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss'
})
export class LanguageSwitchComponent {
  private translate = inject(TranslateService);
  currentLang: 'en' | 'de';

  constructor() {
    const saved = localStorage.getItem('lang') as 'en' | 'de' | null;
    const lang = saved ?? this.translate.getCurrentLang();
    this.currentLang = (lang === 'de' || lang === 'en') ? lang : 'en';
    this.translate.use(this.currentLang);
  }

  setLanguage(lang: 'en' | 'de') {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
