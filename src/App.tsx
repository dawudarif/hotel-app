import { Route, Routes } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import Contact from './components/pages/contactPage/Contact';
import Facilities from './components/pages/facilitiesPage/Facilities';
import Home from './components/pages/homePage/Home';
import Rooms from './components/pages/roomsPage/Rooms';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/facilities' element={<Facilities />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
