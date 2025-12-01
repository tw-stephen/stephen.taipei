import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const categories = [
    { id: 'Frontend', icon: Code, label: 'Frontend' },
    { id: 'Backend', icon: Server, label: 'Backend' },
    { id: 'DevOps', icon: Database, label: 'DevOps' },
    { id: 'AI', icon: Cpu, label: 'AI Tools' },
  ];

  const skillsData = {
    Frontend: [
      { name: 'Angular (Signal, Zoneless)', level: 95 },
      { name: 'React / Next.js', level: 90 },
      { name: 'TailwindCSS / SCSS', level: 95 },
      { name: 'Vue.js', level: 85 },
      { name: 'Motion / GSAP', level: 80 },
    ],
    Backend: [
      { name: 'Laravel (Octane/Swoole)', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'WebSocket', level: 85 },
      { name: 'MySQL / PostgreSQL', level: 90 },
      { name: 'Redis', level: 85 },
    ],
    DevOps: [
      { name: 'Docker / Kubernetes', level: 80 },
      { name: 'GitLab CI/CD', level: 85 },
      { name: 'GCP / AWS', level: 80 },
      { name: 'Nx Monorepo', level: 85 },
      { name: 'Nginx', level: 85 },
    ],
    AI: [
      { name: 'OpenAI API Integration', level: 90 },
      { name: 'Cursor AI Workflow', level: 95 },
      { name: 'Claude / LLM Prompting', level: 90 },
      { name: 'AI Model Tuning Basics', level: 75 },
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Technical Expertise</h2>
          <p className="mt-4 text-gray-600">A comprehensive toolset for building modern digital solutions.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100 min-h-[400px]">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillsData[activeTab].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
