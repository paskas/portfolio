import { Component, ViewChild } from '@angular/core';
import { RefSlideComponent } from '../../components/ref-slide/ref-slide.component';
import { REF_SLIDECARD } from '../../content/refereces.content';
import { SHARED_UI } from '../../../../shared';


@Component({
  selector: 'app-references',
  imports: [...SHARED_UI, RefSlideComponent],
  templateUrl: './references.section.html',
  styleUrl: './references.section.scss'
})
export class ReferencesSection {
  slideshow = REF_SLIDECARD;

  @ViewChild(RefSlideComponent) refSlide!: RefSlideComponent;

  showNextCard(): void {
    this.refSlide.showNextCard();
  }

  showPreviousCard(): void {
    this.refSlide.showPreviousCard();
  }
}
