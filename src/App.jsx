import './App.css'
import {  Routes, Route } from 'react-router-dom'
import Login from './pages/forms/login/login.jsx'
import Register from './pages/forms/register/register.jsx'
import AdminHero from './pages/adminPanel/adminHero/adminHero'
import Claimes from './pages/adminPanel/claimes/showClaim'
import Insurance from './pages/adminPanel/Insurance/showInsurance'
import Payment from './pages/adminPanel/payment/showpayment'
import AddInsurance from './pages/adminPanel/Insurance/addInsurance'
import Policies from './pages/adminPanel/policies/showpolicies'
import UserPolicies from './pages/adminPanel/userPolices/showuserPolices'
import User from './pages/adminPanel/user/showuser'
import AddPolicies from './pages/adminPanel/policies/addpolicies.jsx'
import Review from './pages/adminPanel/Reviews/showReviews.jsx'
import UserNav from './component/userNav/userNav.jsx'
import UserHero from './pages/userPanel/userHero/userHero.jsx'
import AuthContext from './context/authContex.jsx'
import AdminNav from './component/adminNav/adminNav.jsx'

import { useContext } from 'react'
import Card from './pages/userPanel/cardInsurance/cardInsurance.jsx'
import PolicyCard from './pages/userPanel/policy card/policycard.jsx'
import SubmitForm from './pages/userPanel/form/form.jsx'
import Apply from './pages/adminPanel/apply/applytable.jsx'
import Profile from './pages/userPanel/profile/profile.jsx'
import Update from './pages/userPanel/update/update.jsx'
import Assistant from './assistant/assistant.jsx'
import ExpandClaimForm from './pages/userPanel/claim/claim.jsx'
import ShowClaim from './pages/userPanel/show claim/showclaim.jsx'
import PaymentForm from './pages/forms/payment/payment.jsx'

function App() {
  const { auth } = useContext(AuthContext); // Now context is available here
  console.log(auth);

  return (
    <>
      
        {auth === "admin" ? <AdminNav /> : <UserNav />}
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/admin' element={<AdminHero />}></Route>
          <Route path='/claim' element={<Claimes />}></Route>
          <Route path='/Insurance' element={<Insurance />}></Route>
          <Route path='/Payment' element={<Payment />}></Route>
          <Route path='/addIsur' element={<AddInsurance />}></Route>
          <Route path='/Policies' element={<Policies />}></Route>
          <Route path='/UserPolicies' element={<UserPolicies />}></Route>
          <Route path='/User' element={<User />}></Route>
          <Route path='/addPolicies' element={<AddPolicies />}></Route>
          <Route path='/Review' element={<Review />}></Route>
          {/* <Route path='/home' element={<Home />}></Route> */}
          <Route path='/' element={<UserHero />}></Route>
          <Route path='/ins' element={<Card/>}></Route>
          <Route path='/poli' element={<PolicyCard/>}></Route>
          <Route path='/submitForm/:id' element={<SubmitForm/>}></Route>
          <Route path='/applyTable' element={<Apply/>}></Route>
          <Route path='/pro' element={<Profile/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          <Route path='/Claim/:id' element={<ExpandClaimForm/>}></Route>
          <Route path='/assistant' element={<Assistant />}></Route>
          <Route path='/useClaim' element={<ShowClaim />}></Route>
          <Route path='/PaymentForm/:id' element={<PaymentForm />}></Route>

        </Routes>
      
    </>
  );
}

export default App;
