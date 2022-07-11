import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav title='Home'></Nav>} />
          <Route path='/msr' element={<Nav title='Msr'></Nav>} />
          <Route path='/imane' element={<Nav title='Imane'></Nav>} />
          <Route path='/contact' element={<Nav title='Contact'></Nav>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
