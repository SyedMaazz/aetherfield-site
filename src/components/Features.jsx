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
    <section className="relative -mt-70 pt-42 pb-29 bg-white z-0">
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
          <div className="w-[750px] -ml-30">
            <div className="mb-5">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="border-t-[0.01px] border-black/10 py-5.5"
                >
                  {/* Container for Heading and ID */}
                  <div className="flex justify-between items-start">
                    <h3 className="text-[20px] font-nav font-medium text-black">
                      {step.title}
                    </h3>
                    <span
                      className="text-[15.5px] font-medium text-[#636262] tabular-nums"
                      style={{ fontFamily: '"Geist Mono", monospace' }}
                    >
                      {step.id}
                    </span>
                  </div>

                  <p className="text-black font-serif text-[20px] mt-1 max-w-md whitespace-nowrap">
                    {step.desc}
                  </p>
                </div>
              ))}
              <div className="border-[0.01px] border-black/10 w-full"></div>
            </div>

            {/* Match Hero Section Buttons: px-6, py-3, text-sm, rounded-sm */}
            <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded-sm flex items-center gap-2 cursor-pointer">
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
