import './App.css';
import Navbar from '../src/Pages/Shared/Navbar'
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import ServiceDetails from './Pages/Purchase/ServiceDetails';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service/:serviceId" element={<ServiceDetails/>}/>
        {/* <Route path="about" element={<About />} /> */}
        <Route path="login" element={<Login />} />
      </Routes> 
      <ToastContainer />
    </div>
  );
}

export default App;
