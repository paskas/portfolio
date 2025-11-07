import { Component } from '@angular/core';
import { SHARED_UI } from '../../../../shared';
import { InfoBoxComponent } from '../../../../shared/info-box/info-box.component';
import { CONTACT_QUESTION, CONTACT_SUBTITLE, CONTACT_TEXT } from '../../content/contact-me.content';
import { ContactFormComponents } from '../../components/contact-form/contact-form.components';

@Component({
  selector: 'app-contact-me',
  imports: [...SHARED_UI, InfoBoxComponent, ContactFormComponents],
  templateUrl: './contact-me.section.html',
  styleUrl: './contact-me.section.scss'
})
export class ContactMeSection {
  text = CONTACT_TEXT;
  secondaryTitle = CONTACT_SUBTITLE;
  question = CONTACT_QUESTION;
}
