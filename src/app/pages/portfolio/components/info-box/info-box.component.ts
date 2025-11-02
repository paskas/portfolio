import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Info, Skillquestion } from '../../content/content.types';
import { SHARED_UI } from '../../../../shared';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [...SHARED_UI, CommonModule],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent {
  @Input() subtitle: string = '';
  @Input() title: string = '';
  @Input() aboutText: string = '';
  @Input() skillText: string = '';
  @Input() projectText: string = '';
  @Input() infos?: Info[];
  @Input() question?: Skillquestion[] = [];
  @Input() questionText: string = '';
}
