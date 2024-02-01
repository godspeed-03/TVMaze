import React from "react";
import gihub from "../assets/github-mark.png";

function Footer() {
  return (
    <>
      <footer className=" h-[10vh]">
        <section className="content  flex flex-col items-center justify-center gap-2 py-3">
          <div className="text-white flex items-center justify-center font-bold gap-2">
            <a href="https://theviiew.netlify.app/" target="_blank">
              <span className="">The VIIEW</span>
            </a>
            <span className=""> by</span>
            <a href="https://github.com/godspeed-03" target="_blank">
              <span className="">Satyam Anand. </span>
            </a>
          </div>
          <div className="github">
            <a href="https://github.com/godspeed-03/TVMaze.git" target="_blank">
              <img
                src={gihub}
                alt="gihub_logo"
                className="w-10 bg-black rounded-full"
              />
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
