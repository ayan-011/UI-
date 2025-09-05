const Page1 = () => {
  const sections = [
    {
      id: 1,
      img: "1.png",
      text: "No central coordinator. No central point of failure. Your node, your rules, your sats, your privacy. Made possible by the market.",
      reverse: false,
    },
    {
      id: 2,
      img: "2.png",
      text: "No central coordinator. No central point of failure. Your node, your rules, your sats, your privacy. Made possible by the market.",
      reverse: true,
    },
    {
      id: 3,
      img: "3.png",
      text: "No central coordinator. No central point of failure. Your node, your rules, your sats, your privacy. Made possible by the market.",
      reverse: false,
    },
  ];

  return (
    <div className="w-full lg:bg-[#424242] bg-zinc-200 pointer-events-none text-black lg:text-white py-1 flex flex-col gap-10  ">
      {sections.map((section) => (
        <Section key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Page1;


// Reusable Section
function Section({ img, text, reverse }) {
  return (
    <div
      className={`w-full min-h-[70vh]  lg:bg- md:min-h-[40vh]  xl:min-h-[70vh] lg:py-14 flex flex-col lg:flex-row md:flex-row items-center  ${
        reverse ? "lg:flex-row-reverse md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Block */}
      <div className="w-full md:w-1/2 lg:w-1/2 h-auto lg:h-full flex items-center lg:px-20   ">
        <div className="flex flex-col gap-6  lg:w-full p-9  ">
          <p className="heading text-3xl sm:text-2xl md:text-4xl lg:text-5xl  font-semibold   gap-2 text-start">
            <span className="font-light">Completely</span> decentralized.
          </p>
          <p className=" sm:text-base md:text-lg  lg:text-xl leading-tight md:leading-relaxed lg:leading-relaxed tracking-tight">
            {text}
          </p>
        </div>
      </div>

      {/* Image Block */}
      <div className="w-full md:w-1/2 lg:w-1/2 h-auto lg:h-full flex items-center justify-center px-6 lg:px-0 ">
        <div className="card w-full sm:w-3/4 md:w-2/3 lg:w-2/3 aspect-square flex items-center justify-center">
          <img src={img} alt={`section-${img}`} className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}
