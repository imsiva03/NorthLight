import { PenTool, Code2, Fingerprint, Megaphone, type LucideIcon } from "lucide-react";

export type Service = { title: string; description: string; icon: LucideIcon };
export type Project = { title: string; category: string; image: string; alt: string };

export const services: Service[] = [
  { title: "UI/UX Design", description: "Research-led interfaces that make complex products feel obvious to use.", icon: PenTool },
  { title: "Web Development", description: "Fast, accessible sites built with Next.js and shipped with care.", icon: Code2 },
  { title: "Branding", description: "Names, logos and visual systems that hold together across every touchpoint.", icon: Fingerprint },
  { title: "Digital Marketing", description: "Campaigns and content that bring the right people to your door.", icon: Megaphone },
];

export const projects: Project[] = [
  
  { title: "Harbor Coffee Roasters", category: "Branding", image: "/work/harbor.svg", alt: "Abstract coffee-inspired brand artwork" },
  { title: "Lumen Banking App", category: "UI/UX", image: "/work/lumen.svg", alt: "Abstract mobile banking interface artwork" },
  { title: "Tidewell Furniture", category: "Web", image: "/work/tidewell.svg", alt: "Abstract furniture storefront artwork" },
  { title: "Orbit Fitness", category: "Marketing", image: "/work/orbit.svg", alt: "Abstract fitness campaign artwork" },
  { title: "Fernwood Clinic", category: "Web", image: "/work/fernwood.svg", alt: "Abstract healthcare website artwork" },
  { title: "Paperkite Books", category: "Branding", image: "/work/paperkite.svg", alt: "Abstract bookshop identity artwork" },
];
