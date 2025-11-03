import type { Skill, Skillquestion, Tooltip } from './content.types';

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

export const SKILL_TEXT = "A short introduction of your skills. Highlight your experience of  using different front-end technologies and emphasise your openness to learning and adapting to new technologies. Show how important it is for you to keep up with the rapid changes in web development.";

export const SKILL_QUESTION: Skillquestion[] = [
  { text: 'You need ', highlight: false },
  { text: 'another skill?', highlight: true },
];

export const SKILL_QUEST_TEXT = "Feel free to contact me. I look forward to expanding on my previous knowledge.";

export const SKILL_TOOLTIP: Tooltip[] = [
  {
    id: 'growth', text: 'I love learning new frameworks', images: [
      { iconSrc: 'assets/icons/skills/React.svg', label: 'React' },
      { iconSrc: 'assets/icons/skills/Vue.svg', label: 'Vue.js' },
    ]
  }
];