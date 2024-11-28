import { Route, Routes } from 'react-router-dom';
import './App.css'
import SideBar from './Components/SideBar/SideBar';
import TopBar from './Components/SideBar/TopBar/TopBar';
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/HomePage';

function App() {


  return (
    <>
      <div className="App">
       <Routes>
        <Route element={<Dashboard/>}>
          <Route path="/" element={<HomePage/>}/>
        </Route>
       </Routes>
        {/* <Dashboard/> */}
      </div>

    </>
  )
}

export default App