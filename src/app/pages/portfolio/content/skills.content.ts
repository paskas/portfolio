import type { Skill, Question, Tooltip } from './content.types';

export const SKILLS_DEFAULT: Skill[] = [
  { id: 'html', label: 'HTML', iconSrc: 'assets/icons/skills/HTML.svg' },
  { id: 'css', label: 'CSS', iconSrc: 'assets/icons/skills/CSS.svg' },
  { id: 'js', label: 'JavaScript', iconSrc: 'assets/icons/skills/JavaScript.svg' },
  { id: 'ts', label: 'TypeScript', iconSrc: 'assets/icons/skills/TypeScript.svg' },
  { id: 'angular', label: 'Angular', iconSrc: 'assets/icons/skills/Angular.svg' },
  { id: 'firebase', label: 'Firebase', iconSrc: 'assets/icons/skills/Firebase.svg' },
  { id: 'material', label: 'Material', iconSrc: 'assets/icons/skills/Material-Design.svg' },
  { id: 'git', label: 'Git', iconSrc: 'assets/icons/skills/Git.svg' },
  { id: 'rest', label: 'REST-API', iconSrc: 'assets/icons/skills/Rest-Api.svg' },
  { id: 'scrum', label: 'Scrum', iconSrc: 'assets/icons/skills/Scrum.svg' },
  { id: 'growth', label: 'Growth mindset', iconSrc: 'assets/icons/skills/GrowthMindset.svg' },
];

export const SKILL_QUESTION: Question[] = [
  { text: 'skills.question.part1', highlight: false, paragraphBreak: false },
  { text: 'skills.question.part2', highlight: true },
];

export const SKILL_TOOLTIP: Tooltip[] = [
  {
    id: 'growth', text: 'skills.tooltip.growth.text', images: [
      { iconSrc: 'assets/icons/skills/React.svg', label: 'React' },
      { iconSrc: 'assets/icons/skills/Vue.svg', label: 'Vue.js' },
    ]
  }
];