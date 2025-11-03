import { Component } from '@angular/core';
import { InfoBoxComponent } from '../../../../shared/info-box/info-box.component';
import { SKILL_QUESTION, SKILL_QUEST_TEXT, SKILL_TEXT, SKILL_TOOLTIP, SKILLS_DEFAULT } from '../../content/skills.content';
import { SkillsComponents } from '../../components/skills/skills.components';


@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [InfoBoxComponent, SkillsComponents],
  templateUrl: './skills.section.html',
  styleUrl: './skills.section.scss'
})
export class SkillsSection {
  text = SKILL_TEXT;
  skills = SKILLS_DEFAULT;
  question = SKILL_QUESTION;
  questionText = SKILL_QUEST_TEXT;
  tooltips = SKILL_TOOLTIP;
}
