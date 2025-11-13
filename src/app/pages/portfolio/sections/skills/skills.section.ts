import { Component } from '@angular/core';
import { InfoBoxComponent } from '../../../../shared/info-box/info-box.component';
import { SKILL_QUESTION, SKILL_TOOLTIP, SKILLS_DEFAULT } from '../../content/skills.content';
import { SkillsComponents } from '../../components/skills/skills.components';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [InfoBoxComponent, SkillsComponents, TranslateModule],
  templateUrl: './skills.section.html',
  styleUrl: './skills.section.scss'
})
export class SkillsSection {
  skills = SKILLS_DEFAULT;
  question = SKILL_QUESTION;
  tooltips = SKILL_TOOLTIP;
}
