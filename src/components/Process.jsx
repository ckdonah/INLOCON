import React from "react";
import { Star } from "lucide-react";

const processSteps = [
  {
    title: "Frühzugang erhalten",
    description:
      "Treten Sie unserer exklusiven Beta bei und gestalten Sie die Zukunft der Ausschreibungen mit.",
    bg: "bg-indigo-100",
    text: "text-indigo-900",
    rotate: "",
    translate: "",
  },
  {
    title: "Schnelle Einrichtung",
    description:
      "Unser Team konfiguriert Inlocon genau nach Ihren Bedürfnissen.",
    bg: "bg-lime-200",
    text: "text-black",
    rotate: "-rotate-2",
    translate: "-translate-y-4",
  },
  {
    title: "Perfekte Treffer finden",
    description:
      "Erhalten Sie relevante Ausschreibungen automatisch in Ihr Dashboard geliefert.",
    bg: "bg-indigo-100",
    text: "text-indigo-900",
    rotate: "rotate-3",
    translate: "translate-y-4",
  },
  {
    title: "Mehr Geschäft gewinnen",
    description:
      "Konzentrieren Sie sich auf die richtigen Chancen und steigern Sie Ihren Umsatz.",
    bg: "bg-gradient-to-br from-indigo-600 to-purple-600",
    text: "text-white",
    rotate: "",
    translate: "",
  },
];

const Process = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto px-6">
      
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-4xl font-extrabold text-indigo-950">
            Wie funktioniert es?
          </h2>
          <p className="text-gray-600 text-l max-w-2xl">
            Wir haben es einfach gemacht, von intelligenter Ausschreibungsbearbeitung zu profitieren.
            Ob Sie wöchentlich bieten oder nur neue Chancen erkunden,
            Inlocon bringt Sie in wenigen Minuten zum Laufen. Von der Anmeldung bis zu Ihrer
            ersten passenden Ausschreibung, so sieht die Reise aus:
          </p>
        </div>

       
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-4 relative">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`w-full md:w-1/4 transition-transform duration-300 ${step.rotate} ${step.translate}`}
            >
              <div
                className={`p-6 md:p-8 ${step.bg} ${step.text} rounded-[2rem] shadow-xl h-full min-h-[240px] flex flex-col justify-center`}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <Star
                      size={16}
                      className={`${
                        step.text === "text-white"
                          ? "text-indigo-900"
                          : step.text
                      }`}
                    />
                  </div>
                </div>

                <h3 className="font-bold text-xl mb-4">{step.title}</h3>
                <p className="text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;