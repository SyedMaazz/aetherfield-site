import React from "react";
import featureVisual from "../assets/feature-visual.png";

const Features = () => {
  const steps = [
    {
      title: "Track",
      id: "001",
      desc: "Emissions, energy, and waste across your value chain",
    },
    {
      title: "Model",
      id: "002",
      desc: "Forecast performance and goal alignment",
    },
    {
      title: "Report",
      id: "003",
      desc: "Generate ESG disclosures, automate frameworks",
    },
    {
      title: "Act",
      id: "004",
      desc: "Surface insights and operational next steps",
    },
  ];

  return (
    <section className="relative -mt-70 pt-42 pb-24 bg-white z-0">
      <div className="w-full h-[1px] bg-black mb-80 mt-28"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Content */}
        <div className="text-center -mt-51 mb-10">
          <h2 className="md:text-[39px] font-nav font-[500] text-slate-900 tracking-[-0.02em] leading-[1.0] max-w-6xl mx-auto">
            Everything you need to measure,
            <br />
            model, and act on sustainability
          </h2>
        </div>

        {/* 2. GRID LAYOUT: Image Left, Text Right */}
        {/* 'grid-cols-1' for mobile, 'md:grid-cols-[1.5fr_1fr]' for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[695px_1fr] gap-8 items-start mt-5">
          {/* LEFT COLUMN: The Image */}
          <div className="w-full">
            <img
              src={featureVisual}
              alt="Feature illustration"
              className="w-full h-auto block"
              style={{ transform: "translateX(-125px)" }}
            />
          </div>

          {/* RIGHT COLUMN: The List */}
          <div className="w-full">
            <div className="mb-12">
              {steps.map((step, index) => (
                <div key={index} className="border-t border-black py-5">
                  <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4">
                    <h3 className="text-xl font-nav font-medium text-black whitespace-nowrap">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 font-serif text-sm truncate">
                      {step.desc}
                    </p>
                    <span className="text-xs font-nav font-medium text-black tabular-nums">
                      {step.id}
                    </span>
                  </div>
                </div>
              ))}
              <div className="border-t border-black w-full"></div>
            </div>

            {/* Button */}
            <button className="px-7 py-4 bg-black text-white text-1xl font-normal flex items-center gap-3 cursor-pointer">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              Explore features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
