import { Outlet } from 'react-router-dom'; // 
import '../../styles/AppLayout.css';
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';



function AppLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

// outlet pour modifier les enfants



export default AppLayout;