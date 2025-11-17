import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SHARED_UI } from '..';
import { InfoBoxComponent } from '../info-box/info-box.component';

@Component({
  selector: 'app-project-overlay',
  imports: [...SHARED_UI, TranslateModule, InfoBoxComponent],
  templateUrl: './project-overlay.component.html',
  styleUrl: './project-overlay.component.scss',
})
export class ProjectOverlayComponent {
  @Input() projectKey: string | null = null;
  @Input() isOpen: boolean = false;

  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
