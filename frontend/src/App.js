import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Services from './pages/Services'
import Developers from './pages/Developers'
import Header from './components/Header';
import Success from './pages/Success';
import Cancel from './pages/Cancel';


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/services' element={<Services/>} />
            <Route path='/developers' element={<Developers/>} />
            <Route path='/cancel' element={<Cancel/>} />
            <Route path='/success' element={<Success/>} />
  
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
