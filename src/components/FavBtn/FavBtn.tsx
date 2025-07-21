import { useState } from "react";
import favIcon from "../../resources/icons/fav.svg";

import "../FavBtn/fav-btn.scss";

// interface FavBtnProps {
//   isFavorite: boolean;
//   onClick?: () => void;
// }

const FavBtn = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsActive((prev) => !prev);
  };

  return (
    <button
      className={`favorite ${isActive ? "favorite--active" : ""}`}
      onClick={toggleFavorite}
    >
      <img className="favorite__icon" src={favIcon} alt="favorite" />
    </button>
  );
};

export default FavBtn;
