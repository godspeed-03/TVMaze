import React from "react";
// import dayjs from "dayjs";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// import "./MovieCard.scss";
// import CircleRating from "./CircleRating";
// import Genres from "./Genres";
// import PosterFallback from "../image/no-poster.png";

import img from '../assets/no-poster.png'

const Card = ({ url }) => {
  return (
    <div className="movieCard ">
      <div className=" object-contain w-full h-full  ">
        <img className="w-full h-96  object-conatin rounded-xl " src={url ?? img} />
      </div>
    </div>
  );
};

export default Card;
