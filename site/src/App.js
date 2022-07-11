import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Contact from './layouts/Contact/Contact';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav title='Home'></Nav>} />
          <Route path='/msr' element={<Nav title='MSR'></Nav>} />
          <Route path='/imane' element={<Nav title='IMANE'></Nav>} />
          <Route path='/contact' element={<Contact></Contact>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
