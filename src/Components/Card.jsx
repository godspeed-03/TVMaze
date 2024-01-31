import React from "react";
import dayjs from "dayjs";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// import "./MovieCard.scss";
// import CircleRating from "./CircleRating";
// import Genres from "./Genres";
// import PosterFallback from "../image/no-poster.png";

import img from '../assets/no-poster.png'
import { useNavigate } from "react-router-dom";

const Card = ({name, id, date, url }) => {
    const navigate = useNavigate()
  return (
    <div className="movieCard md:mb-8 mb-3 " onClick={() =>
        navigate(`/show/${id}`)
    }>
      <div className=" object-contain w-full h-full  ">
        <img className="w-full h-96  object-conatin rounded-xl " src={url ?? img} />
      </div>
      <div className="textBlock text-black font-bold font-mono flex flex-col gap-1 mt-1 ml-3">
                <span className="title ">{name}</span>
                <span className="date">
                    {dayjs(date).format("MMM D, YYYY")}
                </span>
                </div>
    </div>
  );
};

export default Card;
