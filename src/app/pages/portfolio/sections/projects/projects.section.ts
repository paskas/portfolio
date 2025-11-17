import { Component } from '@angular/core';
import { InfoBoxComponent } from "../../../../shared/info-box/info-box.component";
import { ProjectFrameComponent } from "../../components/project-frame/project-frame.component";
import { TranslateModule } from '@ngx-translate/core';
import { ProjectOverlayComponent } from '../../../../shared/project-overlay/project-overlay.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [InfoBoxComponent, ProjectFrameComponent, TranslateModule, ProjectOverlayComponent],
  templateUrl: './projects.section.html',
  styleUrl: './projects.section.scss'
})
export class ProjectsSection {
  selectedProjectKey: string | null = null;

  onSelectProject(key: string): void {
    this.selectedProjectKey = key;
    document.body.classList.add('no-scroll');
  }

  closeOverlay(): void {
    this.selectedProjectKey = null;
    document.body.classList.remove('no-scroll');
  }
}
