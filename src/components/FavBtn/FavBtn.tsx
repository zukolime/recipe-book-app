import favIcon from "../../resources/icons/fav.svg";

import "../FavBtn/fav-btn.scss";

const FavBtn = () => {
  return (
    <button className="favorite favorite--big">
      <img className="favorite__icon" src={favIcon} alt="favorite" />
    </button>
  );
};

export default FavBtn;
