import logo from './logo.svg';
import './App.css';
import NewForm from './components/Login/NewForm';
import UserDashboard from './components/Customer/UserDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import { Route, Routes } from 'react-router-dom';
import Bank from './components/Admin/Bank';
import Customer from './components/Admin/Customer';
import Accounts from './components/Admin/Accounts';
import MyAccounts from './components/Customer/MyAccounts';
import Payment from './components/Customer/Payment';
import Profile from './components/Customer/Profile';
import Guard from './components/SharedComponents/Guard';
import Notfound from './components/SharedComponents/Notfound';

function App() {

  return (
    <>
       <Routes>
        <Route path='/' element={<NewForm/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/accounts' element={<Accounts/>}/>
        <Route path='/bank' element={<Bank/>}/>
        <Route path='/userdashboard/:email' element={<UserDashboard></UserDashboard>}/>
        <Route path='/admindashboard/:email' element={<AdminDashboard/>}/>


        <Route path='/notfound' element={<Notfound/>}/>

        <Route path='/myaccounts' element={<Guard Component ={MyAccounts} role={'ROLE_USER'}/>}/>

        <Route path='/payment' element={<Payment/>}/>
        <Route path='/profile' element={<Profile/>}/>
        
       </Routes>
     </>
  );
}

export default App;
