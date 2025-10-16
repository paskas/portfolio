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
  @Input() variant: 'section' | 'extern' | 'route' = 'section';
  @Input() isExternal: boolean = false;
  @Input() isSection: boolean = false;
}
