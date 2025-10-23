import { Component } from '@angular/core';
import { InfoBoxComponent } from '../../components/info-box/info-box.component';
import { SKILL_QUESTION, SKILL_QUESTTEXT, SKILL_TEXT, SKILLS_DEFAULT } from '../../content/skills.content';
import { SkillsComponents } from '../../components/skills/skills.components';
// import { SHARED_UI } from '../../../../shared';

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
  questionText = SKILL_QUESTTEXT;
}
