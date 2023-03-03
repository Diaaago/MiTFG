import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './componente/list';
import Grafica from './componente/grafica';
import Info from './componente/foodInfo';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/grafica' element={<Grafica />} />
        <Route path='/foodInfo/:id' element={<Info />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
