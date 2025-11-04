export interface InfoBoxContent {
  subtitle: string;
  title: string;
  text?: string;
  question?: Skillquestion[];
  questionText?: string;
  infos?: About[];
}

export interface About {
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
  skills: string[];
  image: string;
}

export interface Slidecard {
  text: string;
  author: string;
}
