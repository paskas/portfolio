import { Component } from '@angular/core';
import { SHARED_UI } from '../../../../shared';
import { NavigationService } from '../../../../core/services/navigation.service';
import { MARQUEE_CONTENT } from '../../content/marquee.content';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [...SHARED_UI, TranslateModule],
  templateUrl: './hero.section.html',
  styleUrl: './hero.section.scss'
})
export class HeroSection {
  constructor(private navigation: NavigationService) { }
  marqueeContent = MARQUEE_CONTENT;
  marqueeReady = false;

  ngOnInit(): void {
    this.initMarquee();
  }

  private initMarquee(): void {
    setTimeout(() => {
      this.marqueeReady = true;
    }, 0);
  }

  scrollToContact(sectionId: string): void {
    this.navigation.scrollTo(sectionId);
  }
}
