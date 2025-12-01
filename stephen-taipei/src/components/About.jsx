import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Zap, Users } from 'lucide-react';

const About = () => {
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
                    <p className="text-gray-500 font-medium">Stephen Chuang</p>
                    <p className="text-gray-400 text-sm">Taipei, Taiwan</p>
                 </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
                 <div className="bg-blue-50 p-2 rounded-lg text-primary">
                    <Award className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Dance Champion</p>
                    <p className="text-sm font-bold text-gray-900">National Winner</p>
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
              Transforming Ideas into <span className="text-primary">Digital Reality</span>
            </h2>

            <div className="prose prose-lg text-gray-600">
              <p>
                I am a Senior Full Stack Engineer with extensive experience in AI platforms, e-commerce, Fintech, and EdTech applications.
                My expertise lies in designing scalable architectures and leading technical teams to build high-performance systems.
              </p>
              <p>
                My journey is unique: starting from Design, moving into Information Management, and finally mastering Full Stack Development.
                This diverse background gives me a distinct product mindset—I understand both the code and the user.
              </p>
              <p>
                Beyond code, I founded a street dance studio and achieved recognition as a National Champion and World Top 8 dancer.
                This discipline has forged my focus, resilience, and creativity in solving complex technical challenges.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-50 p-2 rounded-lg text-green-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Performance</h4>
                  <p className="text-sm text-gray-500">Optimizing for speed and scale</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                 <div className="mt-1 bg-purple-50 p-2 rounded-lg text-purple-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Leadership</h4>
                  <p className="text-sm text-gray-500">Mentoring & Team Building</p>
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
