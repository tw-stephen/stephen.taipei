import React from 'react';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t.experience.title}</h2>

        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-12 space-y-12">
          {t.experience.jobs.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-sm" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                <span className="text-sm font-medium text-primary px-3 py-1 bg-blue-50 rounded-full mt-2 sm:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>

              <h4 className="text-lg text-gray-700 font-medium mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-gray-400" />
                {exp.role}
              </h4>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600 leading-relaxed flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
