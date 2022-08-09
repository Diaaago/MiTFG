import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Foods from './componente/Foods';
import List from './componente/list';
import Produccion from './componente/produccion';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Foods/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/produccion' element={<Produccion/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
