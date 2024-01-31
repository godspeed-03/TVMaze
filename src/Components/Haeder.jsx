import React from "react";

import logo from "../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
  return (
    <>
      <header className="  py-3 ">
        <nav>
          <ul className="flex justify-center items-center gap-5">
            <li>
              <img src={logo} alt="Meetly_logo" onClick={() => navigate('/')} className="w-20 rounded-full" />
            </li>
            <li>
              <span className="md:text-3xl sm:text-2xl text-xl text-white  font-bold font-myfont">
                The VIIEW
              </span>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;