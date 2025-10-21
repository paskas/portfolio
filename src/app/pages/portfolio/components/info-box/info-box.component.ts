import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ABOUT_INFOS } from '../../content/info.content';
import { Info } from '../../content/content.types';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent {
  @Input() subtitle: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() infos: Info[] = ABOUT_INFOS;
}
