import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Foods from './componente/Foods'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Foods/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
