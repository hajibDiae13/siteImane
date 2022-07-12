import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Contact from './layouts/Contact/Contact';
import Home from './layouts/Home/Home';
import Msr from './layouts/Msr/Msr';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/msr' element={<Msr></Msr>} />
          <Route path='/imane' element={<Nav title='IMANE'></Nav>} />
          <Route path='/contact' element={<Contact></Contact>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
