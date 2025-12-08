import React from 'react';
import { ExternalLink, Smartphone, Star, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const AwesomeApp100 = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: Star,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
    },
    {
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
  ];

  return (
    <section id="awesome-app-100" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.awesomeApp100?.title || 'Awesome APP 100'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.awesomeApp100?.subtitle || '100 Premium Native Apps'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          {/* Gradient top bar */}
          <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  {t.awesomeApp100?.badge || 'Stephen\'s New Platform'}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t.awesomeApp100?.heading || 'Curated Premium Native Apps'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t.awesomeApp100?.description || 'A curated collection of 100 premium native applications. Carefully selected for quality, performance, and user experience across iOS and Android platforms.'}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    const featureData = t.awesomeApp100?.features?.[index] || {
                      title: ['Native Apps', 'Premium Quality', 'Cross Platform'][index],
                      desc: ['iOS & Android', 'Carefully Curated', 'Universal'][index],
                    };

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className={`flex-shrink-0 w-10 h-10 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 ${feature.textColor}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{featureData.title}</h4>
                          <p className="text-gray-500 text-xs">{featureData.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <a
                  href="https://awesomeapp100.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  {t.awesomeApp100?.cta || 'Explore Awesome APP 100'}
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
              </div>

              {/* Right visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20 blur-xl" />
                  <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl" />

                  {/* App showcase visual */}
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl mb-4">
                      <span className="text-white text-3xl font-bold">100</span>
                    </div>
                    <p className="text-gray-700 font-semibold text-lg">
                      {t.awesomeApp100?.visualText || 'Premium Apps'}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      {t.awesomeApp100?.visualSubtext || 'Handpicked for Excellence'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwesomeApp100;
