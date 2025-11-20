import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})

export class LinkComponent {
  @Input() label: string = '';
  @Input() href: string = '';
  @Input() routerLink?: string | any[];
  @Input() fragment?: string;
  @Input() variant: 'section' | 'logo' | 'logo-icon' | 'contact' | 'footer' | 'lateral-mail' | 'legal-link' | 'lateral-icon' | 'overlay-btn' = 'section';
  @Input() isExternal: boolean = false;
  @Input() isSection: boolean = false;
  @Input() iconSrc?: string;
  @Input() iconAlt?: string;
  @Input() iconHoverSrc?: string;
}
