import '../Button/button.scss';
import { Link } from 'react-router-dom';

export const ButtonLink = (props) => {
   return (
      <Link className='button' to={props.to}>На главную</Link>
   )
}