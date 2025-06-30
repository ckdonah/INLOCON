import React from "react";
import { processSteps } from "../data/content";
import { Settings, Target, Zap } from "lucide-react";

const Process = () => {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
      
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            So funktioniert es
          </h2>
          <p className="text-xl text-gray-600">
            Unsere Kunden haben rund um die Uhr Zugang zu unserem Portal und
            werden täglich benachrichtigt, wenn für sie passende Ausschreibungen
            veröffentlicht werden.
          </p>
        </div>

        
        <div className="relative">
        
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse opacity-50"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
           
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
              
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center shadow-xl mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="text-white" size={32} />
                    </div>

                    
                    <div
                      className="absolute top-0 left-0 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-all duration-300"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="absolute bottom-0 right-0 w-3 h-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-all duration-300"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>

                
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

              
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>
                </div>

                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white rounded-full shadow-lg border-2 border-indigo-200 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-indigo-500 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
            <div className="text-3xl font-black text-indigo-600 mb-2"></div>
            <h4 className="font-semibold text-gray-900 mb-1">Automatisiert</h4>
            <p className="text-sm text-gray-600">
              Vollautomatische Datenerfassung ohne manuelle Eingriffe
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <div className="text-3xl font-black text-purple-600 mb-2"></div>
            <h4 className="font-semibold text-gray-900 mb-1">Präzise</h4>
            <p className="text-sm text-gray-600">
              Intelligente Filterung für maximale Relevanz Ihrer Ergebnisse
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl border border-pink-100">
            <div className="text-3xl font-black text-pink-600 mb-2"></div>
            <h4 className="font-semibent text-gray-900 mb-1">Schnell</h4>
            <p className="text-sm text-gray-600">
              Sofortige Benachrichtigungen bei neuen passenden Ausschreibungen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
