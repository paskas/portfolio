export interface InfoBoxContent {
  subtitle: string;
  title: string;
  secondaryTitle?: string;
  text?: string;
  question?: Question[];
  questionText?: string;
  infos?: About[];
}

export interface About {
  iconSrc?: string;
  descriptionKey: string;
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

export interface Question {
  text: string;
  highlight?: boolean;
}

export interface Projects {
  label: string;
  skills: string[];
  image: string;
}

export interface Slidecard {
  textKey: string;
  authorKey: string;
}

export interface MarqueeItem {
  textKey: string;
  icon: string;
}