import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() once = true;
  @Input() threshold = 0.7;
  @Input() rootMargin = '0px';

  private observer?: IntersectionObserver;

  constructor(private element: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    this.createObserver();
    this.observeElement();
  }

  private createObserver(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.element.nativeElement.classList.add('is-visible');
          if (this.once) this.observer?.unobserve(this.element.nativeElement);
        } else this.element.nativeElement.classList.remove('is-visible');
      },
      {
        threshold: this.threshold,
        rootMargin: this.rootMargin,
      }
    );
  }

  private observeElement(): void {
    this.observer?.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
