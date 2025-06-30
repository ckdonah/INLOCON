import React from "react";
import { CheckCircle } from "lucide-react";
import { benefits, features } from "../data/content";
import { images } from "../utils/images";

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Warum INLOCON?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ziel ist es, Ihnen Zeit und Geld bei der manuellen Suche nach neuen
            Aufträgen zu sparen und Sie umfänglich mit relevanten
            Auftragschancen zu versorgen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl"></div>
              <div className="relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={images.about}
              alt="Business analytics"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Live Updates
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mt-1">
                    <CheckCircle className="text-emerald-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
