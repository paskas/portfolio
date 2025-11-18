import type { Projects, Projectskills } from "./content.types";

export const PROJECT_FRAME: Projects[] = [
  {
    key: 'join',
    label: 'Join',
    skills: ['HTML', 'CSS', 'Angular', 'TypeScript', 'Firebase'],
    image: '/assets/images/screenshot-Join.jpg'
  },
  {
    key: 'sharkie',
    label: 'Sharkie',
    skills: ['HTML', 'CSS', 'JavaJscript'],
    image: '/assets/images/screenshot-Sharkie.jpg'
  },
  {
    key: 'pokemon',
    label: 'Pokedex',
    skills: ['HTML', 'CSS', 'JavaJscript', 'Firebase'],
    image: '/assets/images/screen-pokedex.png'
  },
]

export const OVERLAY_SKILLS: Projectskills[] = [
  {
    key: 'join',
    label: 'Join',
    skills: ['HTML', 'CSS', 'Angular', 'TypeScript', 'Firebase'],
    iconSrc: [
      '/assets/icons/skills/overlay_HTML.svg',
      '/assets/icons/skills/overlay_CSS.svg',
      '/assets/icons/skills/overlay_Angular.svg',
      '/assets/icons/skills/overlay_TypeScript.svg',
      '/assets/icons/skills/overlay_Firebase.svg'
    ]
  },
]