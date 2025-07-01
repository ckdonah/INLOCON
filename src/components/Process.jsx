import React from "react";
import { Search, Filter, Bell, Settings, Target, Zap } from "lucide-react";

const Process = () => {
  const processSteps = [
    {
      title: "Beschaffung",
      description: "Wir beschaffen täglich aktuelle Ausschreibungen aus hunderten verschiedenen Quellen automatisch für Sie.",
      icon: Search,
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Kategorisierung", 
      description: "Intelligente Kategorisierung nach Fachrichtung, Region und Objektkategorie für maximale Relevanz.",
      icon: Filter,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Benachrichtigung",
      description: "24/7 Portalzugang mit sofortigen Benachrichtigungen bei neuen, passenden Ausschreibungen.",
      icon: Bell,
      gradient: "from-pink-500 to-red-600"
    }
  ];

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

        <div className="bg-white rounded-3xl p-12 border border-gray-100 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="group relative">
                  <div className="relative">
           
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

       
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
            <h4 className="font-semibold text-gray-900 mb-1">Automatisiert</h4>
            <p className="text-sm text-gray-600">
              Vollautomatische Datenerfassung ohne manuelle Eingriffe
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <h4 className="font-semibold text-gray-900 mb-1">Präzise</h4>
            <p className="text-sm text-gray-600">
              Intelligente Filterung für maximale Relevanz Ihrer Ergebnisse
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl border border-pink-100">
            <h4 className="font-semibold text-gray-900 mb-1">Schnell</h4>
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