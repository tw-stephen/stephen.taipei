import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Zap, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Clean, professional placeholder for profile image or graphic */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 overflow-hidden shadow-xl flex items-center justify-center relative">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                <div className="text-center p-8 z-10">
                  <User className="w-24 h-24 mx-auto text-primary-light mb-4 opacity-80" />
                  <p className="text-gray-500 font-medium">{t.hero.name}</p>
                  <p className="text-gray-400 text-sm">{t.about.location}</p>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-lg text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">{t.about.badgeTitle}</p>
                  <p className="text-sm font-bold text-gray-900">{t.about.badgeValue}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              {t.about.title}<span className="text-primary">{t.about.titleHighlight}</span>
            </h2>

            <div className="prose prose-lg text-gray-600">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
              <p>{t.about.description3}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-50 p-2 rounded-lg text-green-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t.about.performanceTitle}</h4>
                  <p className="text-sm text-gray-500">{t.about.performanceDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-purple-50 p-2 rounded-lg text-purple-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t.about.leadershipTitle}</h4>
                  <p className="text-sm text-gray-500">{t.about.leadershipDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
