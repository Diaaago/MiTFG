import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Foods from './componente/Foods';
import List from './componente/list';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Foods/>} />
        <Route path='/list' element={<List/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
