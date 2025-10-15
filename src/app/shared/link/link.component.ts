import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-link',
  imports: [RouterLink, CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() label: string = '';
  @Input() href: string = '';
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() external: boolean = false;
}
