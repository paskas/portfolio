import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { InfoBoxContent } from '../../pages/portfolio/content/content.types';
import { SHARED_UI } from '..';
import { NavigationService } from '../../core/services/navigation.service';
import { TranslateModule } from '@ngx-translate/core';


export type InfoBoxVariant = 'default' | 'about' | 'skills' | 'projects' | 'contact';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [...SHARED_UI, CommonModule, TranslateModule],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent {
  constructor(private navigation: NavigationService) { }
  @Input({ required: true }) content!: InfoBoxContent;
  @Input() variant: InfoBoxVariant = 'default';

  @HostBinding('class') get hostClass() { return `variant-${this.variant}`; }

  scrollToContact(sectionId: string): void {
    this.navigation.scrollTo(sectionId);
  }
}
