import './css/app.scss';
import { UsersPage } from './containers/UsersPage';
import { UserPage } from './containers/UserPage';
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path='/*' element={<UsersPage />} />
        <Route path='/userprofile/:userId' element={<UserPage />} />
      </Routes>
    </main>
  );
}