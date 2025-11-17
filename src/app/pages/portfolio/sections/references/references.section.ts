import { Component, ViewChild } from '@angular/core';
import { RefSlideComponent } from '../../components/ref-slide/ref-slide.component';
import { REF_SLIDECARD } from '../../content/refereces.content';
import { SHARED_UI } from '../../../../shared';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-references',
  imports: [...SHARED_UI, RefSlideComponent, TranslateModule],
  templateUrl: './references.section.html',
  styleUrl: './references.section.scss'
})
export class ReferencesSection {
  slideshow = REF_SLIDECARD;

  private isViewInitialized = false;

  @ViewChild(RefSlideComponent) refSlide!: RefSlideComponent;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isViewInitialized = true;
    }, 0);
  }

  getProgress(): number {
    const totalCards = this.slideshow.length;
    if (!totalCards) { return 0; }
    if (!this.isViewInitialized) { return 0; }
    const currentIndex = this.refSlide.current;
    const oneBasedIndex = currentIndex + 1;
    const progressPercentage = (oneBasedIndex / totalCards) * 100;
    return progressPercentage;
  }

  showNextCard(): void {
    this.refSlide.showNextCard();
  }

  showPreviousCard(): void {
    this.refSlide.showPreviousCard();
  }
}
