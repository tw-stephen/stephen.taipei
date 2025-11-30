import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Copila',
      desc: 'AI Customized Function Platform (Chat/Image/Chart)',
      tech: ['Angular PWA', 'Laravel Octane', 'WebSocket', 'OpenAI'],
      achievement: 'Lighthouse perfect score',
      color: 'bg-blue-600'
    },
    {
      title: 'Meeple Logistics',
      desc: 'OMO E-commerce Shopping Cart System',
      tech: ['Angular PWA', 'Laravel'],
      achievement: 'Accumulated 20,000 members in 1 year',
      color: 'bg-indigo-600'
    },
    {
      title: 'StocX',
      desc: 'Stock Market Sense Training System',
      tech: ['Vue', 'Laravel'],
      achievement: 'Supported 500+ concurrent users on shared hosting',
      color: 'bg-purple-600'
    },
    {
      title: 'Dermatoglyphics System',
      desc: 'Fingerprint Detection Platform',
      tech: ['jQuery', 'Laravel'],
      achievement: 'Automated report generation',
      color: 'bg-cyan-600'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-4 text-gray-600">Showcasing innovation and technical depth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className={`h-2 ${project.color}`} />
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <ExternalLink className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Github className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-lg">{project.desc}</p>

                <div className="mt-auto">
                   <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Key Achievement</p>
                      <p className="text-sm text-green-600 font-medium bg-green-50 px-3 py-2 rounded-lg inline-block">
                        {project.achievement}
                      </p>
                   </div>

                   <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
