import React from 'react';
import { testimonials, trustIndicators } from '../data/content';
import { images } from '../utils/images';

const Testimonials = () => {
  const gradients = [
    'from-indigo-500 to-purple-600',
    'from-purple-500 to-pink-600',
    'from-emerald-500 to-teal-600'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
      
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Was unsere Kunden sagen
          </h2>
    
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-8">
                <div className={`w-8 h-8 bg-gradient-to-r ${gradients[index]} rounded-full flex items-center justify-center`}>
                  <span className="text-white text-lg font-bold">"</span>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img 
                    src={images[testimonial.image]} 
                    alt={`${testimonial.name} testimonial`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50  p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {trustIndicators.map((indicator, index) => (
              <div key={index}>
                <div className="text-3xl font-black text-indigo-600 mb-2">{indicator.number}</div>
                <div className="text-sm text-gray-600">{indicator.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;