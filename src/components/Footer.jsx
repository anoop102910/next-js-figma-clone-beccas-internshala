import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const supportLinks = [
  { url: "/", text: "Help Center" },
  { url: "/", text: "Account Information" },
  { url: "/", text: "About" },
  { url: "/", text: "Contact Us" },
];
const helpLinks = [
  { url: "/", text: "Talk to Support" },
  { url: "/", text: "Support Docs" },
  { url: "/", text: "System Status" },
  { url: "/", text: "Covid response" },
];
const productLinks = [
  { url: "/", text: "Update" },
  { url: "/", text: "Security" },
  { url: "/", text: "Beta Test" },
  { url: "/", text: "Pricing Product" },
];

function Footer() {
  return (
    <footer className="mt-40">
      <div class="mx-auto w-full max-w-screen-xl  py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="/" class="flex items-center">
              <span class="self-center text-6xl text-primary-100 font-semibold whitespace-nowrap ">
                Biccas
              </span>
            </a>
            <p className="p-primary mt-4">Get Started Now and try our Product</p>
            <div className="w-[350px] rounded-full flex items-center justify-between pl-6 pr-1 py-1 bg-transparent border borde-white text-sm outline-none mt-3">
              <input
                className="bg-transparent w-full"
                placeholder="Enter your email here"
                type="text"
              />
              <BsFillArrowRightCircleFill className="text-primary-100" size={36} />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold  uppercase test:text-white">Support</h2>
              <ul class="text-gray-500 test:text-gray-400 font-medium">
                {supportLinks.map((link, index) => (
                  <li key={index} className="mb-4">
                    <a href={link.url} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold  uppercase test:text-white">
                Help and Solution
              </h2>
              <ul class="text-gray-500 test:text-gray-400 font-medium">
                {helpLinks.map((link, index) => (
                  <li key={index} className="mb-4">
                    <a href={link.url} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold  uppercase test:text-white">Product</h2>
              <ul class="text-gray-500 test:text-gray-400 font-medium">
                {productLinks.map((link, index) => (
                  <li key={index} className="mb-4">
                    <a href={link.url} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto test:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm sm:text-center test:text-gray-400">
            © 2023{" "}
            <a href="/" class="hover:underline">
              Biccas Inc
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex  text-sm gap-x-2">
            <span>Terms and Conditions</span>
            <span>.</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
