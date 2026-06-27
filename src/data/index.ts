import type {
  Event,
  JourneyStep,
  Feature,
  Category,
  Discipline,
  Advantage,
  LeaderboardEntry,
  Sponsor,
} from "../types";

export const NAV_LINKS = ["Events", "Programs", "Community", "Ranks"];

export const UPCOMING_EVENTS: Event[] = [
  { name: "Event in Mumbai", date: "11/11/25", location: "AMC", category: "AMC" },
  { name: "Event in Delhi", date: "11/11/25", location: "AMC", category: "Junior Level" },
];

export const PAST_EVENTS: Event[] = [
  { name: "Bengaluru Regionals" },
  { name: "Bengaluru Regionals" },
  { name: "Bengaluru Regionals" },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  { step: 1, icon: "🔧", label: "BUILD YOUR TEAM" },
  { step: 2, icon: "🏆", label: "COMPETE ACROSS INDIA" },
  { step: 3, icon: "⭐", label: "EARN NATIONAL RANKING & VALUE" },
  { step: 4, icon: "👥", label: "JOIN THE LEAGUE" },
];

export const FEATURES: Feature[] = [
  { num: 1, title: "STRUCTURED EVENTS", desc: "From one-off events to a year-round competitive season." },
  { num: 2, title: "DIGITAL IDENTITY", desc: "Your professional robotics legacy, tracked and verified." },
  { num: 3, title: "NATIONAL RANKING", desc: "Benchmark your skills against the best engineers in India." },
  { num: 4, title: "CAREER PATHWAY", desc: "Turning arena victories into real-world industry opportunities." },
];

export const CATEGORIES: Category[] = [
  { icon: "🤖", name: "MINI MAKERS", desc: "Entry-level robotics teams, ages 8–12. Build your first bot." },
  { icon: "💡", name: "JUNIOR INNOVATORS", desc: "Middle school competitors pushing boundaries in automation." },
  { icon: "⚙️", name: "YOUNG ENGINEERS", desc: "High school builders competing at regional and national levels." },
  { icon: "🧠", name: "ROBO MINDS", desc: "Undergraduate and open-category elite combat engineering." },
];

export const DISCIPLINES: Discipline[] = [
  { icon: "🏎️", name: "Robo Race", bg: "from-yellow-950 to-yellow-900", img: "https://images.unsplash.com/photo-1527612820672-5b56351f7346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9ibyUyMHJhY2V8ZW58MHx8MHx8fDA%3D" },
  { icon: "🤖", name: "Line Follower", bg: "from-green-950 to-green-900", img: "https://images.unsplash.com/photo-1779309487417-6b44e5f4b036?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpbmUlMjBmb2xsb3dlciUyMGJvdHxlbnwwfHwwfHx8MA%3D%3D" },
  { icon: "🚗", name: "RC Racing", bg: "from-red-950 to-red-900", img: "https://images.unsplash.com/photo-1769244444909-f75895a22aed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { icon: "🚁", name: "FPV Drone Racing & Aeromodelling", bg: "from-blue-950 to-blue-900", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&q=80" },
  { icon: "🏒", name: "Robo Hockey", bg: "from-teal-950 to-teal-900", span: true, img: "https://i.ytimg.com/vi/pf93CFJ-ppg/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGC0gYShyMA8=&rs=AOn4CLD3FkP4tieLD1DaPLX52HsuwRg4vg" },
  { icon: "⚔️", name: "Robo War", bg: "from-red-950 to-zinc-900", span: true, img: "data:image/jpeg;base64,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" },
];

export const ADVANTAGES: Advantage[] = [
  { icon: "🏆", title: "NATIONAL RECOGNITION", desc: "Represent your team on an official national leaderboard recognized across the country." },
  { icon: "🛡️", title: "FAIR JUDGING", desc: "Compete with confidence under standardized, expert-led evaluation frameworks." },
  { icon: "💼", title: "CAREER OPS", desc: "Bridge the gap between arena victories and top-tier tech placements." },
  { icon: "⚡", title: "HIGH-ENERGY ECO", desc: "Join a nationwide community of elite innovators and robotic athletes." },
];

export const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: "Team Alpha", points: 52000, up: true, color: "bg-red-600" },
  { rank: 2, name: "Circuit Breakers", points: 49800, up: true, color: "bg-blue-600" },
  { rank: 3, name: "Steel Surge", points: 47300, up: false, color: "bg-green-700" },
  { rank: 4, name: "Volt Vanguard", points: 44100, up: true, color: "bg-amber-600" },
  { rank: 5, name: "BotStorm IX", points: 41750, up: true, color: "bg-violet-700" },
];

export const SPONSORS: Sponsor[] = [
  { icon: "🏛️", name: "NIT DELHI" },
  { icon: "⚙️", name: "INDIAN BIT" },
  { icon: "🏛️", name: "NIT SILCHAR" },
  { icon: "🤖", name: "ROBO COMPANY" },
  { icon: "🎓", name: "IIT BOMBAY" },
  { icon: "🦾", name: "GENERAL ROBOTICS" },
  { icon: "🤖", name: "ROBO COMPANY" },
];

export const FOOTER_LINKS = [
  "The Arena", "Join The Team", "Episodes", "Sponsorships",
  "National Ranking", "Help Center", "Programs", "Contact Us",
  "Nationals", "Legal",
];

export const JOIN_ROLES = ["BECOME A JUDGE", "VOLUNTEER", "COMMUNITY MEMBER"];
