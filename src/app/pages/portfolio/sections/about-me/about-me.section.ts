import { Component } from '@angular/core';
import { InfoBoxComponent } from '../../../../shared/info-box/info-box.component';
import { ABOUT_INFOS } from '../../content/about.content';
import { TranslateModule } from '@ngx-translate/core';
import { RevealOnScrollDirective } from '../../../../shared/reveal-on-scroll/reveal-on-scroll.directive';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [InfoBoxComponent, TranslateModule, RevealOnScrollDirective],
  templateUrl: './about-me.section.html',
  styleUrl: './about-me.section.scss'
})
export class AboutMeSection {
  infos = ABOUT_INFOS;
  isImageActive = false;

  activateImageHover() {
    this.isImageActive = true;
  }
}
