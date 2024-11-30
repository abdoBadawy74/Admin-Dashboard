import { Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/HomePage';
import Users from './Pages/Users';
import Consultant from './Pages/Consultant';
import Consultations from './Pages/Consultations';
import Payments from './Pages/Payments';
import CallCenter from './Pages/CallCenter';
import UserProfile from './Pages/Profile/UserProfile';
import ConsultantProfile from './Pages/Profile/ConsultantProfile';

function App() {


  return (
    <>
      <div className="App">
        <Routes>
          <Route element={<Dashboard />}>
            <Route path="/" element={<HomePage />} />
            <Route path='users' element={<Users />} />
            <Route path="users/:id" element={<UserProfile />} />
            <Route path='consultants' element={<Consultant />} />
            <Route path="consultants/:id" element={<ConsultantProfile />} />
            <Route path='consultations' element={<Consultations />} />
            <Route path='payments' element={<Payments />} />
            <Route path="call-center" element={<CallCenter />} />
          </Route>
        </Routes>
        {/* <Dashboard/> */}
      </div>

    </>
  )
}

export default App