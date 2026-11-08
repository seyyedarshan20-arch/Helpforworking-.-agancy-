export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  details: {
    description: string;
    highlights: string[];
    process: string[];
    suitableFor: string;
  };
}

export interface FocusItem {
  title: string;
  description: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
}
