import React from "react";
import { ArrowRight } from "lucide-react";
import { stats } from "../data/content";
import { images, galleryImages } from "../utils/images";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
   
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
         
          <div className="inline-flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-100 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-medium text-gray-700">
              Täglich aktuelle Ausschreibungen
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-6">
            ÖFFENTLICHE AUSSCHREIBUNGEN,
            <span className="block text-gray-900">
              AUFTRÄGE & GESCHÄFTSKONTAKTE.
            </span>
            ALLES AUS EINER QUELLE!
          </h1>

       
          <p className="text-l text-gray-600 leading-relaxed mb-8 max-w-lg">
            Wir beschaffen täglich die aktuellen Ausschreibungen Ihres
            Interesses, kategorisiert nach Fachrichtung, Region und
            Objektkategorie aus hunderten verschiedenen Quellen.
          </p>

        
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Kostenlos starten
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
          </div>

    
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-gray-200">
                    <stat.icon className="text-indigo-600" size={18} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      
        <div className="relative">
      
          <div className="relative z-10 group">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={galleryImages.gallery4 || images.hero}
                alt="INLOCON Portal Dashboard - Moderne Ausschreibungsanalyse"
                className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-purple-900/10 rounded-3xl"></div>

              {/* <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Live Dashboard</span>
                </div>
              </div> */}

              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-600">24/7</div>
                  <div className="text-xs text-gray-600">Active</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-indigo-400/30 to-purple-500/30 rounded-3xl blur-2xl opacity-60"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-emerald-400/30 to-teal-500/30 rounded-3xl blur-2xl opacity-60"></div>

          <div className="absolute top-1/4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-2xl blur-xl"></div>
          <div className="absolute bottom-1/3 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-2xl blur-xl"></div>

       
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, #6366f1 2px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
