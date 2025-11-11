import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss'
})
export class LanguageSwitchComponent {
  currentLang: 'en' | 'de' = 'en';

  setLanguage(lang: 'en' | 'de') {
    this.currentLang = lang;
    console.log(
      `Language switched to: ${lang === 'en' ? 'English' : 'German'}`
    );
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
  }
}
