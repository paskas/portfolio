import { Component } from '@angular/core';
import { InfoBoxComponent } from '../../components/info-box/info-box.component';
import { ABOUT_INFOS, ABOUT_TEXT } from '../../content/info.content';
import { SKILLS_DEFAULT } from '../../content/skills.content';
import { SkillsComponents } from '../../components/skills/skills.components';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [InfoBoxComponent, SkillsComponents],
  templateUrl: './skills.section.html',
  styleUrl: './skills.section.scss'
})
export class SkillsSection {
  text = ABOUT_TEXT;
  infos = ABOUT_INFOS;
  skills = SKILLS_DEFAULT;
}
