import { Component } from '@angular/core';
import { InfoBoxComponent } from '../../../../shared/info-box/info-box.component';
import { ABOUT_INFOS} from '../../content/about.content';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [InfoBoxComponent, TranslateModule],
  templateUrl: './about-me.section.html',
  styleUrl: './about-me.section.scss'
})
export class AboutMeSection {
  infos = ABOUT_INFOS;
}
