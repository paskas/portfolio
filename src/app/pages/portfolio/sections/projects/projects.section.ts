import { Component } from '@angular/core';
import { InfoBoxComponent } from "../../../../shared/info-box/info-box.component";
import { ProjectFrameComponent } from "../../components/project-frame/project-frame.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [InfoBoxComponent, ProjectFrameComponent, TranslateModule],
  templateUrl: './projects.section.html',
  styleUrl: './projects.section.scss'
})
export class ProjectsSection {
}
