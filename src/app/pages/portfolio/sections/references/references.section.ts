import { Component } from '@angular/core';
import { RefSlideComponent } from '../../components/ref-slide/ref-slide.component';
import { REF_SLIDECARD } from '../../content/refereces.content';


@Component({
  selector: 'app-references',
  imports: [RefSlideComponent],
  templateUrl: './references.section.html',
  styleUrl: './references.section.scss'
})
export class ReferencesSection {
  slideshow = REF_SLIDECARD;
}
