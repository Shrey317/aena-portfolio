"use client";

import type { Skill } from "@/lib/types";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiPython,
  SiGit,
  SiVscode,
  SiPostman,
  SiXampp,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type IconComponent = React.ComponentType<{ size?: number; color?: string }>;

// Map string keys (from data.ts) to icon components.
// Both "SiVscode" and "SiVisualstudiocode" are mapped to the same icon
// to avoid breakage if someone uses either key in data.ts.
const iconMap: Record<string, IconComponent> = {
  SiHtml5:           SiHtml5 as IconComponent,
  SiCss3:            SiCss3 as IconComponent,
  SiJavascript:      SiJavascript as IconComponent,
  SiReact:           SiReact as IconComponent,
  SiTailwindcss:     SiTailwindcss as IconComponent,
  SiNodedotjs:       SiNodedotjs as IconComponent,
  SiExpress:         SiExpress as IconComponent,
  SiPhp:             SiPhp as IconComponent,
  SiMysql:           SiMysql as IconComponent,
  SiMongodb:         SiMongodb as IconComponent,
  SiPython:          SiPython as IconComponent,
  SiGit:             SiGit as IconComponent,
  SiVscode:          SiVscode as IconComponent,           // correct react-icons v5 key
  SiVisualstudiocode: SiVscode as IconComponent,  
  SiPostman:         SiPostman as IconComponent,
  SiXampp:           SiXampp as IconComponent,
  FaJava:            FaJava as IconComponent,
};

interface SkillBadgeProps {
  skill: Skill;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const IconComponent = iconMap[skill.icon];
  const color = skill.color ?? "#888";

  return (
    <div
      className="group flex flex-col items-center gap-2.5 p-4 rounded-xl
        border border-white/8 bg-[#111]
        hover:border-violet-500/30 hover:bg-violet-500/5
        transition-all duration-200 cursor-default"
    >
      {/* Icon */}
      <div className="transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5">
        {IconComponent ? (
          <IconComponent size={30} color={color} />
        ) : (
          // Fallback: coloured monogram box for icons not in iconMap
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: `${color}22`, color }}
          >
            {skill.name.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      {/* Label */}
      <span className="text-xs text-[#888] font-medium text-center leading-tight group-hover:text-[#f5f5f5] transition-colors">
        {skill.name}
      </span>
    </div>
  );
}
