import React from "react";
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  Target,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Alle Ausschreibungen an einem Ort",
    description:
      "Wir sammeln Ausschreibungen aus Deutschland, Österreich und der Schweiz und zeigen Ihnen nur die relevanten für Ihr Unternehmen.",
  },
  {
    title: "Personalisierter Feed für Ihr Unternehmen",
    description:
      "Sehen Sie nur Ausschreibungen, die Ihren spezifischen Geschäftsanforderungen und Fähigkeiten entsprechen.",
  },
  {
    title: "Sparen Sie wöchentlich Stunden, gewinnen Sie mehr Aufträge",
    description:
      "Konzentrieren Sie Ihre Zeit auf gewinnende Angebote, anstatt nach Chancen zu suchen.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 relative">
          <div className="relative bg-white">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Warum INLOCON wählen?
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              Effiziente Lösung für Ihre Ausschreibungssuche
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ziel ist es, Ihnen Zeit und Geld bei der manuellen Suche nach
              neuen Aufträgen zu sparen und Sie umfänglich mit relevanten
              Auftragschancen zu versorgen.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-center">
          <div className="lg:col-span-3 space-y-12">
            <div>
              <p className="text-l text-gray-600 leading-relaxed">
                Wir sammeln Ausschreibungen aus Deutschland, Österreich und der
                Schweiz, passen sie an Ihr Unternehmen an und zeigen Ihnen nur
                diejenigen, die es wert sind, darauf zu bieten — und mit
                integrierter Beschaffungsintelligenz helfen wir Ihnen, Ihre
                Gewinnchancen zu erhöhen.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white" size={20} />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-l font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full mx-auto relative overflow-hidden shadow-xl">
                <div className="absolute inset-6 bg-white rounded-full flex flex-col items-center justify-center text-center p-6">
                  <div className="text-3xl font-black text-gray-900 mb-2">
                    24/7
                  </div>
                  <div className="text-base font-semibold text-indigo-600 mb-3">
                    Überwachung
                  </div>
                  <div className="text-xs text-gray-600">
                    Hunderte Portale gleichzeitig im Blick
                  </div>
                </div>

                <div className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <TrendingUp className="text-emerald-500" size={16} />
                </div>

                <div
                  className="absolute bottom-6 left-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                  style={{ animation: "float 3s ease-in-out infinite 1s" }}
                >
                  <Shield className="text-indigo-500" size={18} />
                </div>

                <div
                  className="absolute top-1/2 left-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                  style={{ animation: "float 3s ease-in-out infinite 2s" }}
                >
                  <Zap className="text-yellow-500" size={12} />
                </div>
              </div>

              <div className="absolute bottom-0 right-0 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                500+ Quellen
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Benefits;
