import React from "react";

function Features() {
  return (
    <div>
      <div className="mt-32 flex md:justify-between md:items-center flex-col md:flex-row">
        <h2 className="h2-primary md:w-[400px]">Our Features you cab get</h2>
        <p className="p-tert md:w-[400px] ">
          We offer a variety of interesting features that you can help increase yor productivity at
          work and manage your projrct esaly
        </p>
        <button className="btn-primary">Get Stared</button>
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-20">
        <div>
          <img src="/feature-frame1.svg" alt="" />
          <h4 className="h4-primary mt-6">Collaboration Teams</h4>
          <p className="p-tert mt-2">Here you can handle projects together with team virtually</p>
        </div>
        <div>
          <img src="/feature-frame2.svg" alt="" />
          <h4 className="h4-primary mt-6">Cloud Storage</h4>
          <p className="p-tert mt-2">Here you can handle projects together with team virtually</p>
        </div>
        <div>
          <img src="/feature-frame3.svg" alt="" />
          <h4 className="h4-primary mt-6">Daily Analysis</h4>
          <p className="p-tert mt-2">Here you can handle projects together with team virtually</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
