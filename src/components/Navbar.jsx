import React from "react";

function Navbar() {
  return (
    
    <header className="w-full flex justify-between items-center h-[100px] animate__animated  animate__fadeIn">
      <span id="logo" className="text-5xl font-extrabold text-primary-100">
        Biccas
      </span>
      <div className="flex items-center gap-x-24">
        <nav className="hidden md:block">
          <ul className="flex gap-x-8 items-center text-slate-600">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
        </nav>
        <div id="auth" className="flex items-center gap-x-3">
          <button className="">Login</button>
          <button className="bg-primary-100 px-2.5 py-1.5 rounded-md text-white text-sm">Sign up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
