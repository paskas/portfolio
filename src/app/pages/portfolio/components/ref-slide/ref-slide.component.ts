import { Component, Input } from '@angular/core';
import { Slidecard } from '../../content/content.types';

@Component({
  selector: 'app-ref-slide',
  standalone: true,
  imports: [],
  templateUrl: './ref-slide.component.html',
  styleUrl: './ref-slide.component.scss'
})
export class RefSlideComponent {
  @Input() slideshow: Slidecard[] = [];

  protected isAnimating: boolean = false;

  private readonly animationTime = 1000;
  private currentIndex: number = 0;
  private getRelativeCardPosition(index: number, totalCards: number): number {
    let relativePosition = (index - this.currentIndex) % totalCards;
    if (relativePosition < 0) { relativePosition += totalCards; }
    if (relativePosition > totalCards / 2) { relativePosition -= totalCards; }
    return relativePosition;
  }
  private getCssClassForPosition(relativePosition: number): string {
    if (relativePosition === 0) { return 'is-center'; }
    if (relativePosition === -1) { return 'is-left'; }
    if (relativePosition === 1) { return 'is-right'; }
    if (relativePosition <= -2) { return 'is-off-left'; }
    return 'is-off-right';
  }

  getClassFor(index: number): string {
    const totalCards = this.slideshow.length;
    if (totalCards === 0) { return ''; }
    const relativePosition = this.getRelativeCardPosition(index, totalCards);
    return this.getCssClassForPosition(relativePosition);
  }

  showNextCard(): void {
    if (!this.slideshow.length || this.isAnimating) { return; }
    this.isAnimating = true;
    this.currentIndex = (this.currentIndex + 1) % this.slideshow.length;
    setTimeout(() => this.isAnimating = false, this.animationTime);
  }

  showPreviousCard(): void {
    if (!this.slideshow.length || this.isAnimating) { return; }
    this.isAnimating = true;
    this.currentIndex = (this.currentIndex - 1 + this.slideshow.length) % this.slideshow.length;
    setTimeout(() => this.isAnimating = false, this.animationTime);
  }
}
