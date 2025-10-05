import { Outlet, useLocation } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './styles.css';
const RootLayout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== '/' && <Navbar></Navbar>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
