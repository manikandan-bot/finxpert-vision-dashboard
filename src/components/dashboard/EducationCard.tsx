
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React from "react";

interface EducationCardProps {
  title: string;
  description: string;
  tag: string;
  type: string;
  duration: string;
  icon: LucideIcon;
  delay?: number;
}

export const EducationCard = ({
  title,
  description,
  tag,
  type,
  duration,
  icon: IconComponent,
  delay = 0,
}: EducationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: delay * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300 min-w-[300px] border border-gray-100"
    >
      <div className="flex gap-4 items-start">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <IconComponent className="h-5 w-5 text-primary" />
        </div>
        <div>
          <div className="flex gap-2 mb-2">
            <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
              {tag}
            </span>
            <span className="px-2 py-0.5 bg-secondary text-muted-foreground rounded-full text-xs">
              {type}
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">{duration}</span>
            <button className="text-primary text-sm font-medium hover:underline">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
