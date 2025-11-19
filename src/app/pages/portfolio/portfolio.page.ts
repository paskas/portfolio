import { Component } from '@angular/core';
import { HeroSection } from './sections/hero/hero.section';
import { AboutMeSection } from './sections/about-me/about-me.section';
import { SkillsSection } from "./sections/skills/skills.section";
import { ProjectsSection } from "./sections/projects/projects.section";
import { ReferencesSection } from "./sections/references/references.section";
import { ContactMeSection } from "./sections/contact-me/contact-me.section";
import { MainLayout } from '../../layout/main-layout/main-layout';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeroSection, AboutMeSection, SkillsSection, ProjectsSection, ReferencesSection, ContactMeSection, MainLayout],
  templateUrl: './portfolio.page.html',
  styleUrl: './portfolio.page.scss'
})
export class PortfolioPage {

}
