import { Component } from '@angular/core';
import { InfoBoxComponent } from '../../../../shared/info-box/info-box.component';
import { ABOUT_INFOS, ABOUT_TEXT } from '../../content/about.content';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [InfoBoxComponent],
  templateUrl: './about-me.section.html',
  styleUrl: './about-me.section.scss'
})
export class AboutMeSection {
  text = ABOUT_TEXT;
  infos = ABOUT_INFOS;
}
