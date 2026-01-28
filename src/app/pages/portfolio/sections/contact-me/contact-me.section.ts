import { Component } from '@angular/core';
import { SHARED_UI } from '../../../../shared';
import { InfoBoxComponent } from '../../../../shared/info-box/info-box.component';
import { CONTACT_QUESTION } from '../../content/contact-me.content';
import { ContactFormComponents } from '../../components/contact-form/contact-form.components';
import { TranslateModule } from '@ngx-translate/core';
import { RevealOnScrollDirective } from '../../../../shared/reveal-on-scroll/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact-me',
  imports: [...SHARED_UI, InfoBoxComponent, ContactFormComponents, TranslateModule, RevealOnScrollDirective],
  templateUrl: './contact-me.section.html',
  styleUrl: './contact-me.section.scss'
})
export class ContactMeSection {
  question = CONTACT_QUESTION;
}
