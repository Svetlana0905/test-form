import './userslist.scss';
import { Button } from '../ui/Button/Button';

export const UsersList = (props) => {
   return (
      <section className='section'>
         <div className='sort-block'>
            <h3 className='sort-block__subtitle subtitle'>Сортировка</h3>
            <Button name={'по городу'} action={props.sortCity} />
            <Button name={'по компании'} action={props.sortCompany} />
         </div>
         <div className='users'>
            <div >
               <h2 className='users__title title'>Список пользователей</h2>
            </div>
            {props.sort ? props.sort : props.context}
         </div>
      </section>
   );
}