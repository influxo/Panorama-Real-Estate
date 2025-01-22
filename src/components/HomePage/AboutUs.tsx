import React from "react";

const AboutUs = () => {
  return (
    <div className="container-custom flex flex-col lg:flex-row items-center py-28 gap-12 border-b border-[#262626]">
      {/* Left Content */}
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
          Rreth Nesh
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
      <div className="bg-[#141414] rounded-xl border-2 border-[#262626] shadow-[#c4c4c469] shadow-lg">
        <div className="flex">
          <div className="p-6 w-[52%]">
            <div className="border p-4 border-l-0 border-t-0 border-b-0 border-r-[#262626]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#2A2A2A] rounded-lg">
                  {/* <Star className="w-6 h-6 text-purple-500" /> */}
                </div>
                <h2 className="text-xl font-semibold text-white">
                  Shërbime Konsultimi
                </h2>
              </div>
              <p className="text-[#999999] text-sm leading-relaxed">
                Eksploroni mundësitë me ekspertët tanë të patundshmërisë. Ofrim
                shërbime të personalizuara që mbulojnë çdo aspekt të blerjes,
                shitjes, dhe qiradhënies së pronave. Nga vlerësimi i detajuar
                dhe i saktë i pronës, deri te identifikimi i mundësive të
                investimit dhe zgjidhjet financiare, ne jemi këtu për t'ju
                ndihmuar të merrni vendimet më të mira.
              </p>
            </div>
          </div>

          <div className="p-6 w-[48%]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#2A2A2A] rounded-lg">
                {/* <GraduationCap className="w-6 h-6 text-purple-500" /> */}
              </div>
              <h2 className="text-xl font-semibold text-white">
                Menaxhimi dhe Mirëmbajtja e Pronave
              </h2>
            </div>
            <p className="text-[#999999] text-sm leading-relaxed">
              Ne marrim përsipër të gjitha nevojat për mirëmbajtjen e pronës
              suaj. Jo vetëm që sigurojmë pastrimin dhe rregullimin e çdo gjëje
              të prishur, por gjithashtu kujdesemi për kontrollin e sigurisë të
              pronave që na besoni. Kujdesemi për çdo detaj për të garantuar që
              ju dhe klientët tuaj të ndiheni të sigurt dhe të kënaqur, duke
              ofruar një shërbim të plotë dhe të paanshëm për çdo nevojë të
              patundshmërisë tuaj.
            </p>
          </div>
        </div>

        <div className="p-6 ">
          <div className="flex items-center pt-4 gap-3 mb-4 border border-l-0 border-t-[#262626] border-b-0 border-r-0">
            <div className="p-2 bg-[#2A2A2A] rounded-lg">
              {/* <Home className="w-6 h-6 text-purple-500" /> */}
            </div>
            <h2 className="text-xl font-semibold text-white">
              Qiradhënie dhe Shitje
            </h2>
          </div>
          <p className="text-[#999999] text-sm leading-relaxed">
            Ne jemi partneri juaj i besueshëm për menaxhimin e të gjitha
            aspekteve të banesave, shtëpive, dhe vilave tuaja, qoftë për
            qiradhënie apo shitje. Merrni avantazhin e shërbimeve tona të plota,
            që përfshijnë marketing të specializuar, negociata, dhe mirëmbajtje
            të vazhdueshme. Kujdesemi për çdo detaj nga fillimi deri në fund,
            duke ju mundësuar të përqendroheni në përfitimet tuaja financiare pa
            u ngarkuar me përgjegjësitë operative.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
