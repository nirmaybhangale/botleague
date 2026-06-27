export interface Event {
  name: string;
  date?: string;
  location?: string;
  category?: string;
}

export interface JourneyStep {
  step: number;
  icon: string;
  label: string;
}

export interface Feature {
  num: number;
  title: string;
  desc: string;
}

export interface Category {
  icon: string;
  name: string;
  desc: string;
}

export interface Discipline {
  icon: string;
  name: string;
  img: string;
  bg: string;
  span?: boolean;
}

export interface Advantage {
  icon: string;
  title: string;
  desc: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  up: boolean;
  color: string;
}

export interface Sponsor {
  icon: string;
  name: string;
}
