import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import About from './pages/About';
import Appartement from './pages/Appartement';
import Error404 from './pages/Error404';
import Landing from './pages/Landing';




function AppRouter() {
  
  return (
    <>
     <Routes>
        <Route path="/" element={<AppLayout />}>
        <Route index element={<Landing />} />  
        <Route path="about" element={<About />} />
        <Route path="logement/:id" element={<Appartement />} />
        <Route path="test" element={<Appartement />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
    </>

    //Applayout contient nav et footer 
  );
}

export default AppRouter;