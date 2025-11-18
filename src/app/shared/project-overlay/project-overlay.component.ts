import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SHARED_UI } from '..';
import { InfoBoxComponent } from '../info-box/info-box.component';
import { OVERLAY_SKILLS } from '../../pages/portfolio/content/projects.content';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project-overlay',
  imports: [...SHARED_UI, TranslateModule, InfoBoxComponent, NgOptimizedImage],
  templateUrl: './project-overlay.component.html',
  styleUrl: './project-overlay.component.scss',
})
export class ProjectOverlayComponent {
  projectskills = OVERLAY_SKILLS;
  @Input() projectKey: string | null = null;
  @Input() isOpen: boolean = false;

  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
