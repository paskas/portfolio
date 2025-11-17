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
  currentLang: 'de' | 'en';

  constructor() {
    const saved = localStorage.getItem('lang') as 'de' | 'en' | null;
    const lang = saved ?? this.translate.getCurrentLang();
    this.currentLang = (lang === 'de' || lang === 'en') ? lang : 'de';
    this.translate.use(this.currentLang);
  }

  setLanguage(lang: 'de' | 'en') {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
