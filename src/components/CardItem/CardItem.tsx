import { Link } from 'react-router-dom';
import FavBtn from '../FavBtn/FavBtn';

import { Recipe } from '../../types/recipe';

import '../CardItem/card-item.scss';

const CardItem = ({ id, thumbnail, name, difficulty, area }: Recipe) => {
  return (
    <li className='cards__item'>
      <Link to={`/recipe/${id}`}>
        <div
          className='cards__header'
          style={{
            background: `url(${thumbnail}) center / cover no-repeat`,
          }}
        >
          <FavBtn />
        </div>
        <div className='cards__info'>
          <h2 className='cards__title'>{name}</h2>
          <div className='cards__footer'>
            <span className='cards__difficulty'>{difficulty}</span>
            <span className='cards__area'>{area}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CardItem;
