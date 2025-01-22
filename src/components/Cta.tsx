import React from "react";

const Cta = () => {
  return (
    <div className="container-custom flex flex-col lg:flex-row justify-between items-center py-28 border-b border-[#262626]">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
          Ne Punojmë Për Ju
        </h1>
        <p className="text-[#999999]">
          Zbuloni shkëlqiminë patundshmëri me ne. Përkushtimi ynë ju siguron jo
          vetëm një shtëpi, por një ambient që jehon luks dhe rehati.
        </p>
      </div>
      <div>
        <button className="bg-[#7F56D9] hover:bg-[#6941C6] hover:-translate-y-1 duration-300 text-white px-8 py-3 rounded-lg font-medium">
          Na Kontaktoni
        </button>
      </div>
    </div>
  );
};

export default Cta;
