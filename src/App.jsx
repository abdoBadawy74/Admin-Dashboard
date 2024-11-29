import { Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/HomePage';
import Users from './Pages/Users';
import Consultant from './Pages/Consultant';
import Consultations from './Pages/Consultations';

function App() {


  return (
    <>
      <div className="App">
       <Routes>
        <Route element={<Dashboard/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path='users' element={<Users/>} />
          <Route path='consultants' element={<Consultant/>} />
          <Route path='consultations' element={<Consultations/>} />
        </Route>
       </Routes>
        {/* <Dashboard/> */}
      </div>

    </>
  )
}

export default App