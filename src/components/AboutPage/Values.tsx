import React from "react";

const Values = () => {
  return (
    <div className="container-custom flex flex-col lg:flex-row justify-between items-center py-28 gap-12 border-b border-[#262626]">
      {/* Left Content */}
      <div className="flex-1">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
          Vlerat Tona
        </h1>

        <p className="text-[#999999]">
          Eksploroni mundësitë me ekspertët tanë të patundshmërisë. Ofrim
          shërbime të personalizuara që mbulojnë çdo aspektë të blerjes,
          shitjes, dhe qiradhënie së pronave. Nga vlerësimi i detajuar dhe i
          saktë i pronës, deri te identifikimi i mundësive të investimit dhe
          zgjidhjet financiare, ne jemi këtu për t'ju ndihmuar të merrni
          vendimet më të mira.
        </p>
      </div>

      {/* Right Content */}
      <div className="bg-[#141414] rounded-xl border-2 border-[#262626] shadow-[#c4c4c469] shadow-lg flex-1 grid grid-cols-2">
        {/* Trust */}
        <div className="p-8 border-b border-r border-[#262626]">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#2A2A2A] rounded-lg">
              {/* <Star className="w-6 h-6 text-purple-500" /> */}
            </div>
            <h2 className="text-xl font-semibold text-white">Trust</h2>
          </div>
          <p className="text-[#999999] text-sm leading-relaxed">
            Trust is the cornerstone of every successful real estate
            transaction.
          </p>
        </div>

        {/* Excellence */}
        <div className="p-8 border-b border-[#262626]">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#2A2A2A] rounded-lg">
              {/* <Star className="w-6 h-6 text-purple-500" /> */}
            </div>
            <h2 className="text-xl font-semibold text-white">Excellence</h2>
          </div>
          <p className="text-[#999999] text-sm leading-relaxed">
            We set the bar high for ourselves. From the properties we list to
            the services we provide.
          </p>
        </div>

        {/* Client-Centric */}
        <div className="p-8 border-r border-[#262626]">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#2A2A2A] rounded-lg">
              {/* <Star className="w-6 h-6 text-purple-500" /> */}
            </div>
            <h2 className="text-xl font-semibold text-white">Client-Centric</h2>
          </div>
          <p className="text-[#999999] text-sm leading-relaxed">
            Your dreams and needs are at the center of our universe. We listen,
            understand.
          </p>
        </div>

        {/* Our Commitment */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#2A2A2A] rounded-lg">
              {/* <Star className="w-6 h-6 text-purple-500" /> */}
            </div>
            <h2 className="text-xl font-semibold text-white">Our Commitment</h2>
          </div>
          <p className="text-[#999999] text-sm leading-relaxed">
            We are dedicated to providing you with the highest level of service,
            professionalism, and support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
