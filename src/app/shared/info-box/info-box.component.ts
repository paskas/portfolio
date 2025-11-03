import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { About, InfoBoxContent } from '../../pages/portfolio/content/content.types';
import { SHARED_UI } from '..';


export type InfoBoxVariant = 'default' | 'about' | 'skills' | 'projects' | 'contact';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [...SHARED_UI, CommonModule],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent {
  @Input({ required: true }) content!: InfoBoxContent;
  @Input() variant: InfoBoxVariant = 'default';

  @Input() subtitle: string = '';
  @Input() title: string = '';
  @Input() aboutText: string = '';
  @Input() projectText: string = '';
  @Input() infos?: About[];

  @HostBinding('class') get hostClass() { return `variant-${this.variant}`; }

}
