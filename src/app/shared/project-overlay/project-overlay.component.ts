import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SHARED_UI } from '..';
import { InfoBoxComponent } from '../info-box/info-box.component';
import { OVERLAY_LINKS, OVERLAY_SKILLS, PROJECT_FRAME } from '../../pages/portfolio/content/projects.content';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project-overlay',
  imports: [...SHARED_UI, TranslateModule, InfoBoxComponent, NgOptimizedImage],
  templateUrl: './project-overlay.component.html',
  styleUrl: './project-overlay.component.scss',
})
export class ProjectOverlayComponent {
  projectFrame = PROJECT_FRAME;
  projectskills = OVERLAY_SKILLS;
  projectLinks = OVERLAY_LINKS;
  isClosing: boolean = false;

  @Input() projectKey: string | null = null;
  @Input() isOpen: boolean = false;

  @Output() close = new EventEmitter<void>();

  get currentOverlaySkills() {
    if (!this.projectKey) return undefined;
    return this.projectskills.find((item) => {
      return item.key === this.projectKey;
    });
  }

  get currentProjectImage() {
    if (!this.projectKey) return undefined;
    const project = this.projectFrame.find((item) => {
      return item.key === this.projectKey;
    });
    return project?.image;
  }

  get currentProjectLinks() {
    if (!this.projectKey) return undefined;
    return this.projectLinks.find((item) => {
      return item.key === this.projectKey;
    });
  }

  getProjectIndex(): number {
    if (!this.projectKey) return 0;
    const index = this.projectFrame.findIndex((project) => {
      return project.key === this.projectKey;
    });
    return index === -1 ? 0 : index;
  }

  showNextProject(): void {
    const currentIndex = this.getProjectIndex();
    const nextIndex = (currentIndex + 1) % this.projectFrame.length;
    this.projectKey = this.projectFrame[nextIndex].key;
  }

  onClose(): void {
    this.isClosing = true;
    window.setTimeout(() => {
      this.isClosing = false;
      this.close.emit();
      document.body.classList.remove('no-scroll');
    }, 250);
  }
}
