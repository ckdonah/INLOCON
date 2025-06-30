import React from 'react';
import { footerLinks } from '../data/content';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid md:grid-cols-3 gap-12 mb-12">
         
          <div>
            <div className="flex items-center space-x-3 mb-6">
           
              <div>
                <span className="text-xl font-black text-black tracking-tight">INLOCON</span>
              </div>
            </div>
            <p className="text-black leading-relaxed">
              Ihr Partner für intelligente Auftragsakquise im deutschsprachigen Raum.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-black">Services</h4>
            <ul className="space-y-3 text-black">
              {footerLinks.services.map((service, index) => (
                <li key={index} className="hover:text-gray-600 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
     
          <div>
            <h4 className="font-bold mb-4 text-black">Unternehmen</h4>
            <ul className="space-y-3 text-black">
              {footerLinks.company.map((item, index) => (
                <li key={index} className="hover:text-gray-600 transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      
        <div className="border-t border-gray-800 pt-8 text-center text-black">
          <p>&copy; 2025 INLOCON AG. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;