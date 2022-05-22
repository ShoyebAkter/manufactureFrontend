import './App.css';
import Navbar from '../src/Pages/Shared/Navbar'
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="booking" element={<Booking/>} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="login" element={<Login />} /> */}
      </Routes> */
    </div>
  );
}

export default App;
