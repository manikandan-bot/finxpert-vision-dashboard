
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface CreditScoreProps {
  score: number;
  maxScore: number;
  level: string;
  suggestions: string[];
}

export const CreditScore = ({
  score,
  maxScore,
  level,
  suggestions,
}: CreditScoreProps) => {
  const percentage = (score / maxScore) * 100;
  const data = [
    { name: "Score", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];
  
  const COLORS = ["#4F46E5", "#EEF2FF"];
  
  let levelColor = "text-amber-600";
  if (percentage >= 80) {
    levelColor = "text-emerald-600";
  } else if (percentage >= 65) {
    levelColor = "text-blue-600";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Credit Health</h3>
        <span className={cn("font-medium", levelColor)}>{level}</span>
      </div>
      
      <div className="flex gap-4 mb-4">
        <div className="w-1/2 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                startAngle={180}
                endAngle={0}
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index]}
                    cornerRadius={index === 0 ? 10 : 0}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center -mt-6">
            <span className="text-3xl font-bold">{score}</span>
            <p className="text-xs text-muted-foreground">out of {maxScore}</p>
          </div>
        </div>
        
        <div className="w-1/2">
          <h4 className="font-medium text-sm mb-2">Suggestions</h4>
          <ul className="space-y-2">
            {suggestions.map((suggestion, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <svg className="w-4 h-4 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-muted-foreground">{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <button className="w-full py-2 rounded-lg gradient-bg text-white text-sm font-medium transition-opacity hover:opacity-90">
        Improve Score
      </button>
    </motion.div>
  );
};
