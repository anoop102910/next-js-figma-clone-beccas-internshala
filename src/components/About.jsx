import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function About() {
  return (
    <div className="mt-32 md:flex justify-between ">
      <div className="md:w-[60%]">
        <h2 className="h2-primary">How we support our partner all over the world</h2>
        <p className="p-secondary mt-6">
          SaaS become a common delivery model for many business application, including office
          software, messaging software, payroll processing software, DBMS software, management
          software
        </p>
        <div className="flex  mt-10 gap-x-10">
          <div className="flex flex-col gap-y-2">
            <Rating1 />
            <span className="text-[0.9rem]">4.9 / 5 rating</span>
            <span className="text-slate-600 text-sm">databrics</span>
          </div>{" "}
          <div className="flex flex-col gap-y-2">
            <Rating2 />
            <span className="text-[0.9rem]">4.8 / 5 rating</span>
            <span className="text-slate-600 text-sm">ChainAnalysis</span>
          </div>
        </div>
      </div>
      <div className="md:w-[35%] flex flex-col items-start gap-y-6">
        <div className="mt-10 md:mt-0">
          <h4 className="h4-primary">Publishing</h4>
          <p className="p-tert">
            Plan, collaborate, and publishing your content that drivees meaningful engagement and
            growth for your barnd
          </p>
        </div>
        <div>
          <h4 className="h4-primary">Analytics</h4>
          <p className="p-tert">
          Analyze your performance and create goegeous report
          </p>
        </div>
        <div>
          <h4 className="h4-primary">Engagement</h4>
          <p className="p-tert">
          Quiuckly navigate you anda engage with your adience
          </p>
        </div>
      </div>
    </div>
  );
}

function Rating1() {
  return (
    <>
      <div className="flex gap-x-1 text-yellow-500 text-xl">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
    </>
  );
}
function Rating2() {
  return (
    <>
      <div className="flex gap-x-1 text-yellow-500 text-xl">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>
    </>
  );
}
export default About;
