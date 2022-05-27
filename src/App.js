import './App.css';
import Navbar from '../src/Pages/Shared/Navbar'
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import ServiceDetails from './Pages/Purchase/ServiceDetails';
import RequireAuth from './Pages/Shared/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddProduct from './Pages/Dashboard/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import MyOrders from './Pages/Dashboard/MyOrders';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import Blogs from '../src/Pages/Blogs/Blogs'
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/Shared/NotFound';
import Payment from './Pages/Purchase/Payment';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        
        <Route path="service/:serviceId" element={
        <RequireAuth>
          <ServiceDetails/>
        </RequireAuth>
        }/>
         <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          
          <Route path="orders" element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path="addproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manageproduct" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path="makeadmin" element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes> 
      <ToastContainer />
    </div>
  );
}

export default App;
