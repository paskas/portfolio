export interface Info {
  iconSrc?: string;
  description?: string;
}

export interface Skill {
  id: string;
  label: string;
  iconSrc: string;
}

export interface Tooltip {
  id: string;
  text: string;
  images: { iconSrc: string; label?: string }[];
}

export interface Skillquestion {
  text: string;
  highlight?: boolean;
}

export interface Projects {
  label: string;
  skill: string;
}
