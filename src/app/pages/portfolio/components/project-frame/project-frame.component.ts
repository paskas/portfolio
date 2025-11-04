import { Component} from '@angular/core';
import { PROJECT_FRAME } from '../../content/projects.content';

@Component({
  selector: 'app-project-frame',
  imports: [],
  templateUrl: './project-frame.component.html',
  styleUrl: './project-frame.component.scss'
})
export class ProjectFrameComponent {
  projects = PROJECT_FRAME;
}