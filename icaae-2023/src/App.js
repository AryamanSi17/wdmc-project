import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './component/Navbar';
import Sponsorship from './component/Sponsorship'
import Registration from './pages/registration/Registration'
// import Committee from
// import Awards from
// import About from
// import Sponsorship from



import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      
   

    <Routes>
      <Route index element ={<Home/>}/>

      <Route path ='/sponsorship' element={<Sponsorship/>}/>

    </Routes>
 

    </BrowserRouter>
  );
}

export default App;
