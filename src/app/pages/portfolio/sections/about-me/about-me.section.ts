import { Component } from '@angular/core';
import { InfoBoxComponent } from '../../components/info-box/info-box.component';
import { ABOUT_INFOS, ABOUT_TEXT } from '../../content/info.content';

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
