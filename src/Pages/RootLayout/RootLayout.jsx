import { Outlet, useLocation } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './styles.css';
import { Bounce, ToastContainer } from 'react-toastify';
const RootLayout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className="flex flex-col min-h-screen h-full">
        {pathname !== '/' && <Navbar></Navbar>}
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default RootLayout;
