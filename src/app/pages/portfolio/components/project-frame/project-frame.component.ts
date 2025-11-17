import { Component, EventEmitter, Output } from '@angular/core';
import { PROJECT_FRAME } from '../../content/projects.content';

@Component({
  selector: 'app-project-frame',
  imports: [],
  templateUrl: './project-frame.component.html',
  styleUrl: './project-frame.component.scss'
})
export class ProjectFrameComponent {
  projects = PROJECT_FRAME;

  @Output() selectProject = new EventEmitter<string>();

  onProjectClick(key: string): void {
    this.selectProject.emit(key);
  }
}