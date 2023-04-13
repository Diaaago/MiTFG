import './App.css';

import IndexRouter from './router/IndexRoutes';


function App(props) {
  return (


  <IndexRouter></IndexRouter>

  );
}

export default App;


/* import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import List from './componente/list';
import DashboardVisitor from './view/DashboardVisitor';
import GraficaHumedad from './componente/GraficaHumedad';
import Grafica from './componente/Grafica';
import Info from './componente/foodInfo'; */



/*     <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/' element={<DashboardVisitor />} />
        <Route path='/grafica' element={<GraficaHumedad />} />
        <Route path='/foodInfo/:id' element={<Info />} />
        <Route path='/' element={<DashboardVisitor />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
 */