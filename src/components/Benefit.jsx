import React from "react";

function Benefit() {
  const features = [
    "Free Consulting With Expert Saving Money",
    "Online Banking",
    "Investment Report Every Month",
    "Saving Money for Future",
    "Online Transaction",
  ];
  return (
    <div className="mt-32 min-h-screen md:flex items-start justify-between">
      <div>
        <h4 className="h2-primary md:w-[400px]">What benefit will you get</h4>
        <ul className="flex flex-col gap-y-6 mt-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-x-4">
              <img src="check.svg" alt="" />
              <p className="p-primary">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      <img className="max-sm:mt-10 md:w-[35%]" src="/computer.png" alt="" />
    </div>
  );
}

export default Benefit;
