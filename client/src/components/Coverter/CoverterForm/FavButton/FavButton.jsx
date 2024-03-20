import React from "react";
import HeartIcon from "../../../icons/HeartIcon/HeartIcon";

const FavButton = ({ addConvertion }) => {
  return <button className="fav-button" onClick={addConvertion}>
          <HeartIcon />
        </button>;
};

export default FavButton;
