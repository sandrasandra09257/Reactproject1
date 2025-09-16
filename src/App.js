import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import Banner from './component/banner/banner';
import Logobar from './component/logobar/logobar';
import Grid from './component/Grid/Grid';
import Latestwork from './component/Latestwork/Latestwork';
import Testimonial from './component/Testimonial/Testimonial';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Work from './component/Pages/Work';
import Cont from './component/Pages/Cont';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='*' element={<Navigate to='/Home'/>}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Cont />}></Route>
      <Route path='/Work' element={<Work />}></Route>
    </Routes>
 

  </BrowserRouter>
  

  
  </>
  );
}

export default App;
