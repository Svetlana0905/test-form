import './userexcerpt.scss';
import { Link } from 'react-router-dom';
import { UserCard } from './UserCard';

export const UserExcerpt = ({ item }) => {
   return (
      <div className='user--excerpt' key={item.id}>
         <UserCard name={item.name} city={item.address.city} company={item.company.name} />
         <Link className='user--excerpt__link link' title='Посмотреть профиль' to={`/userprofile/${item.id}`}>Подробнее</Link>
      </div>
   )
}