import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "INLOCON hat unseren Ausschreibungsprozess revolutioniert. Wir sparen täglich Stunden und finden mehr relevante Aufträge.",
    name: "Michael Schmidt",
    role: "Geschäftsführer",
    company: "Schmidt Bau GmbH",
    image: "testimonial1",
  },
  {
    quote:
      "Die automatische Benachrichtigung bei passenden Ausschreibungen ist ein Game-Changer für unser Unternehmen.",
    name: "Sarah Weber",
    role: "Projektleiterin",
    company: "Weber Consulting",
    image: "testimonial2",
  },
  {
    quote:
      "Dank INLOCON haben wir unsere Erfolgsquote bei Ausschreibungen um 40% gesteigert.",
    name: "Thomas Müller",
    role: "Vertriebsleiter",
    company: "TechSolutions AG",
    image: "testimonial3",
  },
  {
    quote:
      "Die umfassende Abdeckung aller relevanten Portale spart uns enorm viel Zeit bei der Recherche.",
    name: "Anna Hofmann",
    role: "Einkaufsleiterin",
    company: "Hofmann Industries",
    image: "testimonial4",
  },
  {
    quote:
      "Mit INLOCON verpassen wir keine wichtigen Ausschreibungen mehr. Ein unverzichtbares Tool für unser Business.",
    name: "Robert Klein",
    role: "Geschäftsführer",
    company: "Klein & Partner",
    image: "testimonial5",
  },
];

const images = {
  testimonial1:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
  testimonial2:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
  testimonial3:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  testimonial4:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  testimonial5:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const gradients = [
    "from-indigo-500 to-purple-600",
    "from-purple-500 to-pink-600",
    "from-emerald-500 to-teal-600",
    "from-orange-500 to-red-600",
    "from-cyan-500 to-blue-600",
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 3 : prev - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-gray-600">
            Über 500 Unternehmen vertrauen bereits auf INLOCON
          </p>
        </div>

        <div className="relative mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => {
              const globalIndex = currentIndex + index;
              return (
                <div
                  key={globalIndex}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
                >
                  <div className="absolute -top-4 left-8">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${
                        gradients[globalIndex % gradients.length]
                      } rounded-full flex items-center justify-center shadow-lg`}
                    >
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
                        className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-gray-100"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.company}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.name}, {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handlePrevious}
            className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="flex md:hidden justify-center space-x-4 mb-8">
          <button
            onClick={handlePrevious}
            className="bg-indigo-600 text-white rounded-full p-3 shadow-lg hover:bg-indigo-700 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="bg-indigo-600 text-white rounded-full p-3 shadow-lg hover:bg-indigo-700 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center space-x-2">
          {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-indigo-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
