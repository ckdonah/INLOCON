import React from 'react';
import { partnerBenefits } from '../data/content';
import { partnerLogos } from '../utils/images';

const Partners = () => {
  const partnersData = [
    {
      name: "Partner 1",
      logo: partnerLogos.partner1,
      alt: "Partner 1 Logo"
    },
    {
      name: "Partner 2", 
      logo: partnerLogos.partner2,
      alt: "Partner 2 Logo"
    },
    {
      name: "Partner 3",
      logo: partnerLogos.partner3,
      alt: "Partner 3 Logo"
    },
    {
      name: "Partner 4",
      logo: partnerLogos.partner4,
      alt: "Partner 4 Logo"
    },
    {
      name: "Partner 5",
      logo: partnerLogos.partner5,
      alt: "Partner 5 Logo"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
       
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Unsere vertrauenswürdigen Partner
          </h2>
          <p className="text-gray-600">
            Gemeinsam für Ihren Erfolg im Ausschreibungswesen
          </p>
        </div>

      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center mb-16">
          {partnersData.map((partner, index) => (
            <div key={index} className="group flex items-center justify-center p-6">
              <img 
                src={partner.logo}
                alt={partner.alt}
                className="max-w-full max-h-16 w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

     
        <div className="grid md:grid-cols-3 gap-8">
          {partnerBenefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <benefit.icon className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;