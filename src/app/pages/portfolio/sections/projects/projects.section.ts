import { Component } from '@angular/core';
import { InfoBoxComponent } from "../../../../shared/info-box/info-box.component";
import { ProjectFrameComponent } from "../../components/project-frame/project-frame.component";
import { PROJECT_FRAME, PROJECT_TEXT } from '../../content/projects.content';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [InfoBoxComponent, ProjectFrameComponent],
  templateUrl: './projects.section.html',
  styleUrl: './projects.section.scss'
})
export class ProjectsSection {
  text = PROJECT_TEXT;
  procects = PROJECT_FRAME;
}
