import React from "react";
import {
  ArrowRight,
  Sparkles,
  Search,
  Target,
  Zap,
  TrendingUp,
  Shield,
  CheckCircle,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="absolute inset-0">
        {/* <div className="absolute top-10 right-10 w-96 h-96 border-2 border-gray-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 border-2 border-indigo-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-purple-200 rounded-full opacity-25"></div> */}

        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-32 right-32 w-40 h-40 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center bg-white border border-indigo-200 px-4 py-2 lg:px-6 lg:py-3 rounded-full shadow-sm">
              <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-emerald-400 rounded-full animate-pulse mr-2 lg:mr-3"></div>
              <span className="text-indigo-800 font-medium text-sm lg:text-base">
                Täglich aktuelle Ausschreibungen
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Öffentliche Ausschreibungen, Aufträge & Geschäftskontakte.
                <br />
                Alles aus einer Quelle!
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Wir beschaffen täglich die aktuellen Ausschreibungen Ihres
              Interesses, kategorisiert nach Fachrichtung, Region und
              Objektkategorie aus
              <span className="font-semibold text-indigo-600">
                {" "}
                hunderten verschiedenen Quellen
              </span>
              .
            </p>

            <div className="pt-4">
              <button className="group relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white px-6 py-3 lg:px-6 lg:py-3 rounded-xl font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="relative flex items-center justify-center">
                  Kostenlos starten
                  <ArrowRight
                    className="ml-2 lg:ml-3 group-hover:translate-x-1 transition-transform duration-300"
                    size={18}
                  />
                </div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team collaborating on tender opportunities"
                  className="w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>

              <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl border border-gray-100 max-w-[140px] lg:max-w-[180px]">
                <div className="flex items-center mb-2">
                  <Target className="w-3 h-3 lg:w-4 lg:h-4 text-indigo-600 mr-1 lg:mr-2" />
                  <span className="font-semibold text-gray-900 text-xs lg:text-sm">
                    Passende Ausschreibungen
                  </span>
                </div>

                <div className="flex items-center justify-between mb-2 lg:mb-3">
                  <span className="text-xl lg:text-2xl font-bold text-gray-900">
                    368
                  </span>
                  <div className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
                    +15.2%
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-1.5 lg:h-2">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-1.5 lg:h-2 rounded-full"
                    style={{ width: "68%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Hero;
