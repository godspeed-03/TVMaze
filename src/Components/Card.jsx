import React from "react";
import dayjs from "dayjs";
import { Tilt } from "react-tilt";
// import 'react-tilt/dist/tilt.css';
import img from "../assets/no-poster.png";
import { useNavigate } from "react-router-dom";

const Card = ({ name, id, date, url }) => {
  const navigate = useNavigate();

  return (
    <div className="md:mb-8 mb-3" onClick={() => navigate(`/show/${id}`)}>
      <Tilt
        className=" Tilt card  "
        style={{
          transformStyle: "preserve-3d",
        }}
        options={{
          max: 30,
          perspective: 1400,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          speed: 2000,
          glare: true,
          maxGlare: 0.2,
          scale: 1,
        }}
      >
        <div className=" object-contain w-full h-full  ">
          <img
            className="w-full h-96  object-conatin rounded-xl "
            src={url ?? img}
          />
        </div>
      </Tilt>
      <div className="textBlock text-black flex flex-col gap-1 rounded-lg mt-1 px-3 transition duration-300 ease-in-out transform hover:translate-x-2 hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-400">
        <span className="title text-xl font-bold font-serif">{name}</span>
        <span className="date">{dayjs(date).format("MMM D, YYYY")}</span>
      </div>
    </div>
  );
};

export default Card;
