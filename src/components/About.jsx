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
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Inlocon - der starke Partner für Ihren Erfolg
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Als führender Informationsdienstleister im öffentlichen Beschaffungswesen unterstützen wir Unternehmen dabei, effizient neue Aufträge zu finden.
            </p>
            
      
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-indigo-600 mb-1">D-A-CH</div>
                <div className="text-sm text-gray-500">Marktabdeckung</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-indigo-600 mb-1">Leipzig</div>
                <div className="text-sm text-gray-500">Hauptsitz</div>
              </div>
            </div>

  
            <div className="flex items-center space-x-4">
              <img 
                src={images.team1} 
                alt="Andreas Scobel"
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
              />
              <img 
                src={images.team2} 
                alt="Roberto da Silva"
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg -ml-2"
              />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Andreas Scobel & Roberto da Silva</p>
                <p className="text-xs text-gray-500">Ihr Expertenteam</p>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </section>
  );
};

export default About;