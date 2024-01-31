import React from "react";
import gihub from "../assets/github-mark.png";

function Footer() {
  return (
    <>
      <footer className="">
        <section className="content py-5 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center font-bold gap-2">
            <a href="https://theviiew.netlify.app/" target="_blank">
              <span className="text-white">The VIIEW</span>
            </a>
            <span className="text-black font-semibold"> by</span>
            <a href="https://github.com/godspeed-03" target="_blank">
              <span className="text-white">Satyam Anand. </span>
            </a>
          </div>
          <div className="github">
            <a href="https://github.com/godspeed-03/TVMaze.git" target="_blank">
              <img src={gihub} alt="gihub_logo" className="w-10 bg-black rounded-full" />
            </a>
          </div>
          <div className="copyright text-white">
            &#169;Copyright. All rights reversed.
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;