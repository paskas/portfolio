import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})

export class ButtonsComponent {
  @Input() label: string = '';
  @Input() variant: 'main' | 'secondary' | 'arrow-left' | 'arrow-right' | 'close' = 'main';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() imgSrc?: string;
  @Input() iconAlt?: string;
  @Input() iconHoverSrc?: string;
  @Input() disabled: boolean = false;

  @Output() buttonClick = new EventEmitter<void>();

  get isArrowVariant(): boolean {
    return this.variant === 'arrow-left' || this.variant === 'arrow-right';
  }
}

