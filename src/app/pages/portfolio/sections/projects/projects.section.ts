import { Component } from '@angular/core';
import { InfoBoxComponent } from "../../components/info-box/info-box.component";
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { ABOUT_INFOS, ABOUT_TEXT } from '../../content/info.content';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [InfoBoxComponent, ProjectCardComponent],
  templateUrl: './projects.section.html',
  styleUrl: './projects.section.scss'
})
export class ProjectsSection {
  text = ABOUT_TEXT;
  infos = ABOUT_INFOS;
}
