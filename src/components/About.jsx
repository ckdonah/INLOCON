import React from 'react';
import { images } from '../utils/images';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
      
          <div className="relative">
            <img 
              src={images.office} 
              alt="Inlocon office Leipzig"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
              <p className="text-sm font-medium text-gray-900 mb-1">Erich-Zeigner-Allee 36</p>
              <p className="text-xs text-gray-600">04229 Leipzig, Deutschland</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-extrabold text-indigo-950 mb-6">
              Inlocon - der starke Partner für Ihren Erfolg
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Seit über 24 Jahren sind wir führender Informationsdienstleister im öffentlichen Beschaffungswesen. Wir recherchieren täglich aus über 463 Originalquellen und unterstützen Unternehmen dabei, effizient passende Aufträge zu finden.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Mit unserer einzigartigen 3-Wege-Filter-Technologie aus ca. 8000 Gewerkeprofilen erreichen wir eine 100% Trefferquote für Ihren Erfolg. Vertrauen Sie auf bewährte Expertise von namhaften Kunden wie Strabag, Deutsche Bahn und Siemens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;