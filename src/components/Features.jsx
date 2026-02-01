import React from 'react';

const Features = () => {
  return (
    /* -mt-32 pulls this section UP under the Hero card. 
       z-0 ensures it stays BEHIND the card. */
    <section className="relative -mt-70 pt-42 pb-24 bg-white z-0">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Content */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Comprehensive impact tracking
          </h2>
        </div>

      </div>
    </section>
  );
};

export default Features;