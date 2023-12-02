import React from "react";
import { PlayIcon } from "../components/Icons";
import {FaUnsplash,FaIntercom} from "react-icons/fa"
import {RxNotionLogo} from "react-icons/rx"
import {SiGrammarly} from "react-icons/si"
import {BsEmojiSmileUpsideDownFill} from "react-icons/bs"

function Home() {
  return (
    <>
      <div className="mt-20 flex items-start justify-between flex-col md:flex-row">
        <div id="home-content" className="md:w-[50%] animate__backInLeft animate__animated animate__slow">
          <h1 className="h1-primary mb-4 ">We are here to increase your productivity</h1>
          <img src="/line.svg" alt="" />
          <p className="p-primary mt-4">
            Let's make your work more organize and easily using the Taskio Dashboard with many of
            the latest featuresin managing work every day.
          </p>
          <div className="flex items-center mt-4 ">
            <button className="btn-primary mr-5  ">Try Free Trial</button>
            <button className="flex items-center gap-x-4">
              <PlayIcon />
              View Demo
            </button>
          </div>
        </div>

        <div className="relative mt-10 md:mt-0 animate__backInRight animate__animated animate__slow">
         <img src="card.svg" className="absolute max-sm:hidden -right-20 -bottom-6 animate__animated animate__swing animate__delay-2s" alt="" />
          <img className="w-[350px] max-sm:mx-auto max-sm:w-min" src="/profile.png" alt="" />
        </div>
      </div>
      <div className="mt-16 ">
        <h3 className="h3-primary text-center">More than 25,000 teams use Collabs</h3>
        <ul className="flex items-center justify-between text-slate-500 md:text-2xl mt-10 w-[90%] mx-auto flex-wrap text-xl">
            <li className="flex items-center gap-x-2 ">
                <FaUnsplash/>
                <span >Unsplash</span>
            </li>
            <li className="flex items-center gap-x-2">
                <RxNotionLogo/>
                <span >Notion</span>
            </li>
            <li className="flex items-center gap-x-2">
                <FaIntercom/>
                <span >Intercom</span>
            </li>
            <li className="flex items-center gap-x-2">
                <SiGrammarly/>
                <span >Grammerly</span>
            </li>
            <li className="flex items-center gap-x-2 ">
                <BsEmojiSmileUpsideDownFill/>
                <span >descript</span>
            </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
