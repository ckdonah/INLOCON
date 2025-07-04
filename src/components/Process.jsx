import React from "react";

const processSteps = [
  {
    title: "Frühzugang erhalten",
    description:
      "Treten Sie unserer exklusiven Beta bei und gestalten Sie die Zukunft der Ausschreibungen mit.",
    bg: "bg-indigo-50",
    text: "text-indigo-900",
    rotate: "",
    translate: "",
  },
  {
    title: "Schnelle Einrichtung",
    description:
      "Unser Team konfiguriert Inlocon genau nach Ihren Bedürfnissen.",
    bg: "bg-white",
    text: "text-indigo-900",
    rotate: "-rotate-2",
    translate: "-translate-y-4",
  },
  {
    title: "Perfekte Treffer finden",
    description:
      "Erhalten Sie relevante Ausschreibungen automatisch in Ihr Dashboard geliefert.",
    bg: "bg-indigo-50",
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

const SolidStar = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Process = () => {
  return (
    <section id="process" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-4xl font-extrabold text-indigo-950">
            Wie funktioniert es?
          </h2>
          <p className="text-gray-600 text-l max-w-2xl">
            Wir machen Ausschreibungsrecherche einfach. Ob Sie wöchentlich
            bieten oder nur gelegentlich nach neuen Chancen suchen – Inlocon
            bringt Sie sofort zum Ziel. Der Weg dahin:
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-4 relative">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`w-full md:w-1/4 transition-transform duration-300 ${step.rotate} ${step.translate} hover:scale-[1.02]`}
            >
              <div
                className={`p-6 md:p-8 ${step.bg} ${step.text} rounded-[2rem] shadow-xl h-full min-h-[240px] flex flex-col justify-center`}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-white border border-indigo-200 flex items-center justify-center">
                    <SolidStar
                      className={`w-4 h-4 ${
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
