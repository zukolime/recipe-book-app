import errorImg from '../../resources/error.gif';
import '../ErrorMsg/errorMsg.scss';

export const ErrorMsg = () => {
  return (
    <div className='error-msg'>
      <img
        src={errorImg}
        alt='error'
      />
    </div>
  );
};
