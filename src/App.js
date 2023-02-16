//import logo from './logo.svg';
import './App.css';
//import Card from './components/Card.jsx';
import Characters from './components/characters/Characters';
import { Routes, Route } from 'react-router-dom';
import CharacterDetail from './components/characterDetail/CharacterDetail';

function App() {
  
  return (
    <Routes>
      <Route path='/characters' element={<Characters/>} />
      <Route path='/detail/:id' element={<CharacterDetail/>}/>
    </Routes>
  );
}

export default App;
