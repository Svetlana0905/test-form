import './userprofile.scss';
import { useState } from 'react';
import { useGetUserQuery } from '../redux/usersApi';
import { useParams } from 'react-router-dom';
import { Button } from '../ui/Button/Button';
import { useForm } from "react-hook-form";
import { Input } from '../ui/Input/Input';
import { ButtonLink } from '../ui/ButtonLink/ButtonLink';

export const UserPage = () => {
   const [read, setRead] = useState(true)
   const colorInp = 'red';

   const InputDisubled = () => {
      setRead(false)
   }

   const { userId } = useParams()
   const { data: user, isLoading } = useGetUserQuery(userId)

   const { register, handleSubmit,
      formState: { errors }, } = useForm({
         mode: "onBlur",
      });

   const onSubmit = data => {
      console.log(data);
   }
   if (isLoading) {
      return <h2>"Loading..." </h2>
   }
   return (
      <section className='section'>
         <div className='sort-block'>
            <h3 className='sort-block__subtitle subtitle'>Сортировка</h3>
            <Button name={'по городу'} />
            <Button name={'по компании'} />
            <ButtonLink to='/test-form'/>
         </div>
         <div className='user'>
            <div className='user__top--block'>
               <h2 className='user__title title'>Профиль пользователя</h2>
               <Button name={'Редактировать'} action={InputDisubled} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
               <div className='form__input-block'>
               <Input type='text' label="User Name" register={register} name='UserName' required read={read} inputName={user.username} color={ errors.UserName?.type === 'required' && colorInp }/>
               <Input type='text' label="Name" register={register} name='Name' required read={read} inputName={user.name} color={ errors.Name?.type === 'required' && colorInp }/>
               <Input type='email' label="Email" register={register} name='Email' required read={read} inputName={user.email} color={ errors.Email?.type === 'required' && colorInp }/>
               <Input type='text' label="Street" register={register} name='Street' required read={read} inputName={user.address.street} color={ errors.Street?.type === 'required' && colorInp }/>
               <Input type='text' label="City" register={register} name='City' required read={read} inputName={user.address.city} color={ errors.City?.type === 'required' && colorInp }/>
               <Input type='text' label="Zip code" register={register} name='ZipCode' required read={read} inputName={user.address.zipcode} color={ errors.ZipCode?.type === 'required' && colorInp }/>
               <Input type='tel' label="Phone" register={register} name='Phone' required read={read} inputName={user.phone} color={ errors.Phone?.type === 'required' && colorInp }/>
               <textarea label="Comment" name='Comment' {...register("Comment")} ></textarea>
               </div>
               <input type="submit" disabled={read} value="Отправить" className='form__button button' />
            </form>
         </div>
      </section>
   );
}