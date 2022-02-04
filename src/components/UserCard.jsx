import './usercard.scss';

export const UserCard = (props) => {
   return (
      <div className='user__inner--column'>
         <p><span className='user__subtitle'>ФИО:</span> <span className='user__text'>{props.name}</span></p>
         <p><span className='user__subtitle'>город:</span> <span className='user__text'>{props.city}</span></p>
         <p><span className='user__subtitle'>компания:</span> <span className='user__text'>{props.company}</span></p>
      </div>
   )
}