import './App.css';
import Navbar from '../src/Pages/Shared/Navbar'
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/Shared/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import MyOrders from './Pages/Dashboard/MyOrders';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageCategory from './Pages/Dashboard/DokanOrder/ManageCategory';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import NotFound from './Pages/Shared/NotFound';
import Payment from './Pages/Purchase/Payment';
import Category from './Pages/Home/Category';
import Subcategory from './Pages/Home/Subcategory';
import Services from './Pages/Home/Services';
import CartDetails from './Pages/Cart/CartDetails';
import AddProducts from './Pages/Addpage/AddProducts';
import Dokanorder from './Pages/Dashboard/DokanOrder/Dokanorder';
import ManageDokan from './Pages/Dashboard/DokanOrder/ManageDokan';
import ManageSubCategory from './Pages/Dashboard/DokanOrder/ManageSubCategory';
import ManageProducts from './Pages/Dashboard/DokanOrder/ManageProducts';


function App() {

  //  const getUserLocationFromAPI = async() => {

  // const apiKey = '1f78df7dd0714c2db4ea522b4399a728';
  //    try {
  //      const response = await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=1f78df7dd0714c2db4ea522b4399a728', {api_key: apiKey});
  //      console.log(response.data);
  //    } catch (error) {
  //      console.log('Something went wrong getting Geolocation from API!');
  //    }
  //  }

  function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    })
  }
  requestPermission();

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/allproducts' element={<AllProducts />} /> */}
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/cart" element={<CartDetails />} />
        {/* <Route path="/portfolio" element={<MyPortfolio />} /> */}
        {/* <Route path="/map" element={<Map />} /> */}
        {/* <Route path="shop/:shopId" element={
        <RequireAuth>
          <Category/>
        </RequireAuth>
        }/> */}
        <Route path='shop/:shopId' element={<Category />}>
        </Route>
        <Route path='/subCategory/:shopId' element={<Subcategory />} />
        <Route path='product/:shopId' element={<Services />} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:serviceId" element={<Payment></Payment>}></Route>

          <Route path="orders" element={<RequireAdmin><Dokanorder></Dokanorder></RequireAdmin>}>

          </Route>
          <Route path="shops/:shopId" element={<RequireAdmin><ManageAllOrders /></RequireAdmin>} />
          <Route path="addproduct" element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
          <Route path="manageproduct" element={<RequireAdmin><ManageDokan></ManageDokan></RequireAdmin>}></Route>
          <Route path="category/:shopId" element={<RequireAdmin><ManageCategory /></RequireAdmin>}>
          </Route>
          <Route path="subcategory" element={<RequireAdmin><ManageSubCategory /></RequireAdmin>} />
          <Route path="products" element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
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
