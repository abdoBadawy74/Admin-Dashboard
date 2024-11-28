import { Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/HomePage';
import Users from './Pages/Users';

function App() {


  return (
    <>
      <div className="App">
       <Routes>
        <Route element={<Dashboard/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path='users' element={<Users/>} />
        </Route>
       </Routes>
        {/* <Dashboard/> */}
      </div>

    </>
  )
}

export default App