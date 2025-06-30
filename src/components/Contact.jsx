import React from 'react';
import { MapPin, Mail, Phone, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactItems = [
    {
      title: "Standort",
      detail: "Erich-Zeigner-Allee 36, 04229 Leipzig",
      icon: MapPin
    },
    {
      title: "E-Mail",
      detail: "inlocon@inlocon.de",
      icon: Mail
    },
    {
      title: "Telefon",
      detail: "+49 (0) 341 253479111",
      icon: Phone
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
    
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Kontakt aufnehmen
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Haben Sie Fragen oder möchten Sie mehr erfahren? Unser Team steht Ihnen gerne zur Verfügung.
              </p>
            </div>
            
       
            <div className="space-y-8">
              {contactItems.map((item, index) => (
                <div key={index} className="group flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300 mt-1">
                    <item.icon className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

   
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mt-1">
                  <Clock className="text-gray-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Geschäftszeiten</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Montag - Freitag: 9:00 - 17:00 Uhr<br />
                    Oder nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>
          </div>
          
     
          <div className="relative">
            <div className="bg-gray-50  p-12 h-full flex flex-col justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Sprechen Sie mit unseren Experten
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Unser erfahrenes Team berät Sie gerne persönlich zu Ihren Anforderungen im Ausschreibungsmanagement.
                </p>

             
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3 group">
                    <span>Termin vereinbaren</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-4 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                    E-Mail schreiben
                  </button>
                </div>

         
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-8 text-center">
            
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;