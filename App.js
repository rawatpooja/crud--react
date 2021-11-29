
import './App.css';
import Add from './Add';
import Show1 from './Show1'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
 <BrowserRouter>
   <div>
      <Routes>
      <Route path="/" element={<Add />}></Route>
      <Route path="/show1" element={<Show1  />}></Route>
      
      </Routes>
  </div>
 </BrowserRouter>
  );
}

export default App;
