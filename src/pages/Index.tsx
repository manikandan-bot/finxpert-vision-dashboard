
import React from "react";
import { motion } from "framer-motion";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { StatCard } from "@/components/dashboard/StatCard";
import { InvestmentPieChart } from "@/components/dashboard/InvestmentPieChart";
import { InvestmentCard } from "@/components/dashboard/InvestmentCard";
import { GoalCard } from "@/components/dashboard/GoalCard";
import { EducationCard } from "@/components/dashboard/EducationCard";
import { CreditScore } from "@/components/dashboard/CreditScore";
import { SectionHeader } from "@/components/dashboard/SectionHeader";
import { AIChat } from "@/components/dashboard/AIChat";
import { SavingsConfetti } from "@/components/dashboard/SavingsConfetti";
import { 
  userOverview, 
  investmentData, 
  goalsData, 
  educationData, 
  creditData,
  chatSamples
} from "@/data/mockData";

const Dashboard = () => {
  const savingsRate = 23.7;
  const totalInvestment = 29600;

  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      <Sidebar />
      
      <div className="flex-1 ml-64">
        <main className="py-8 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex justify-between items-center"
            >
              <div>
                <h1 className="text-3xl font-bold">Your Financial Dashboard</h1>
                <p className="text-muted-foreground">
                  Welcome back, Rahul! Here's your financial overview.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-medium">RS</span>
                </div>
                <div className="pr-2">
                  <p className="font-medium">Rahul Sharma</p>
                  <p className="text-xs text-muted-foreground">Premium Plan</p>
                </div>
              </div>
            </motion.div>
            
            {/* Overview Section */}
            <section className="mb-10">
              <SectionHeader 
                title="Financial Overview"
                description="Your financial health at a glance"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {userOverview.map((stat, i) => (
                  <StatCard
                    key={stat.id}
                    title={stat.title}
                    value={stat.value}
                    icon={stat.icon}
                    change={stat.change}
                    trend={stat.trend as "up" | "down"}
                    color={stat.color}
                    delay={i}
                  />
                ))}
              </div>
            </section>
            
            {/* Investment Section */}
            <section className="mb-10">
              <SectionHeader 
                title="Investment Portfolio"
                description="Your monthly investment allocation"
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <InvestmentPieChart 
                    data={investmentData.slice(0, 4)} 
                    totalInvestment={totalInvestment} 
                  />
                </div>
                
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {investmentData.map((investment, i) => (
                    <InvestmentCard
                      key={investment.id}
                      name={investment.name}
                      description={investment.description}
                      category={investment.category}
                      risk={investment.risk}
                      return={investment.return}
                      value={investment.value}
                      amount={investment.amount}
                      icon={investment.icon}
                      delay={i}
                    />
                  ))}
                </div>
              </div>
            </section>
            
            {/* Goal Section */}
            <section className="mb-10">
              <SectionHeader 
                title="Financial Goals"
                description="Track progress towards your goals"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {goalsData.map((goal, i) => (
                  <GoalCard
                    key={goal.id}
                    title={goal.title}
                    saved={goal.saved}
                    target={goal.target}
                    progress={goal.progress}
                    icon={goal.icon}
                    color={goal.color}
                    date={goal.date}
                    delay={i}
                  />
                ))}
              </div>
            </section>
            
            {/* Education Section */}
            <section className="mb-10">
              <div className="flex justify-between items-center mb-6">
                <SectionHeader 
                  title="Learning Center"
                  description="Enhance your financial knowledge"
                />
                <button className="text-primary font-medium hover:underline">
                  View All Courses
                </button>
              </div>
              
              <div className="flex space-x-6 overflow-x-auto pb-4">
                {educationData.map((module, i) => (
                  <EducationCard
                    key={module.id}
                    title={module.title}
                    description={module.description}
                    tag={module.tag}
                    type={module.type}
                    duration={module.duration}
                    icon={module.icon}
                    delay={i}
                  />
                ))}
              </div>
            </section>
            
            {/* Credit Section */}
            <section className="mb-10">
              <SectionHeader 
                title="Credit Optimizer"
                description="Monitor and improve your credit score"
              />
              
              <CreditScore
                score={creditData.score}
                maxScore={creditData.maxScore}
                level={creditData.level}
                suggestions={creditData.suggestions}
              />
            </section>
          </div>
        </main>
      </div>
      
      {/* AI Chatbot */}
      <AIChat sampleQuestions={chatSamples} />
      
      {/* Confetti for high savings */}
      <SavingsConfetti savingsRate={savingsRate} threshold={20} />
    </div>
  );
};

export default Dashboard;
