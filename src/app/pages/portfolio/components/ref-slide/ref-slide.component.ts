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
}
