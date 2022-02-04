import { useState } from 'react';
import { useGetUsersQuery } from '../redux/usersApi';
import { UserExcerpt } from '../components/UserExcerpt';
import { UsersList } from '../components/UsersList';


export const UsersPage = () => {
   const { data = [], isLoading, isError, error, isSuccess } = useGetUsersQuery();
   const [sort, setSort] = useState(null)
   let context

   const SortCity = () => {
      let usersort = data.slice()
      usersort.sort((a, b) => a.address.city.localeCompare(b.address.city))
      setSort(usersort.map(item => <UserExcerpt key={item.id} item={item} />))
   }
   const SortCompany = () => {
      let usersort = data.slice()
      usersort.sort((a, b) => a.company.name.localeCompare(b.company.name))
      setSort(usersort.map(item => <UserExcerpt key={item.id} item={item} />))
   }
   if (isLoading) {
      return <h2>"Loading..." </h2>
   } else if (isSuccess) {
      context = data.map(item => <UserExcerpt key={item.id} item={item} />)
   } else if (isError) {
      return <h2>{error.toString()}</h2>
   }

   return (
      <UsersList sortCity={SortCity} sortCompany={SortCompany} context={context} sort={sort} />
   );
}