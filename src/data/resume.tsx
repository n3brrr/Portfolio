import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Tailwind } from "@/components/ui/svgs/tailwind";
import { Git } from "@/components/ui/svgs/git";

export const DATA = {
  name: "Ruben Torres",
  initials: "RT",
  url: "https://rubentorres.dev",
  location: "Malaga, Spain",
  locationLink: "https://www.google.com/maps/place/Malaga",
  description:
    "FullStack Developer, passionate about building cool stuff and helping people.",
  summary:
    "I am a FullStack Developer with experience in building web applications. I am passionate about learning new technologies and building cool stuff. I am also a very active person and enjoy playing sports.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Tailwind", icon: Tailwind },
    { name: "Node.js", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
    { name: "Git", icon: Git },
    { name: "Docker", icon: Docker },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "rubentorresdev@gmail.com",
    tel: "+671269932",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/n3brrr",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rubentorresdev/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:[rubentorresdev@gmail.com]",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Sector Alarm",
      href: "https://sectoralarm.es/",
      badges: [],
      location: "Malaga, Spain",
      title: "Security Analyst",
      logoUrl: "sectoralarm-logo.png",
      start: "May 2024",
      end: "July 2024",
      description: "",
    },
  ],
  education: [
    {
      school: "Cesur",
      href: "https://cesur.com",
      degree: "Higher Degree in Web Application Development",
      logoUrl: "cesur-logo.jpeg",
      start: "2023",
      end: "2025",
    },
    {
      school: "Medac",
      href: "https://medac.es",
      degree: "Vocational Degree in Computer Systems and Networks",
      logoUrl: "medac-logo.png",
      start: "2022",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "RitualKiller",
      href: "https://ritualkiller.vercel.app/",
      dates: "2025 - 2026",
      active: true,
      description:
        "RitualKiller is a gamified habit tracker that helps you build healthy habits through streaks, rewards, and challenges.",
      technologies: [
        "Vite.js",
        "Typescript",
        "React",
        "Supabase",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://ritualkiller.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/n3brrr/ritualkiller",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "Preview-RitualKiller.png",
      video: "",
    },
    {
      title: "CineMaster",
      href: "https://cinemasters.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "CineMaster is a movie app that helps you find movies to watch.",
      technologies: ["Vite.js", "Typescript", "React", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://cinemasters.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/n3brrr/CineMaster",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "Preview-CineMaster.png",
      video: "",
    },
    {
      title: "GitHub Hunter",
      href: "https://git-hub-hunter.vercel.app/",
      dates: "2025 - 2026",
      active: true,
      description:
        "GitHub Hunter is a app that helps you find the best github repositories.",
      technologies: ["Vite.js", "Typescript", "React", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://git-hub-hunter.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/n3brrr/GitHub-Hunter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "Preview-GithubHunter.png",
      video: "",
    },
    {
      title: "BarberShop Web",
      href: "https://web-barbershop-five.vercel.app/",
      dates: "2025 - 2025",
      active: true,
      description: "BarberShop Web is a barber shop website.",
      technologies: ["Astro", "JavaScript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://web-barbershop-five.vercel.app//",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/n3brrr/web-barbershop",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "Preview-BarberShop-web.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Solidare Hackathon 2026",
      dates: "2026 - 2026",
      location: "Malaga, Spain",
      description:
        "Developed a web application which helped people to find shelters of animals in Spain.",
      image: "Hackaton1-organizator.png",
      links: [] as readonly {
        title: string;
        href: string;
        icon: React.ReactNode;
      }[],
    },
  ],
} as const;
