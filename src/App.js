import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './/Login';
import Register from './/Register';
import { HomePage } from './HomePage';
import Andhra from './Andhra';
import Karnataka from './Karnataka';
import Kerala from './Kerala';
import Tamilnadu from './Tamilnadu';
import Admin from './Admin';
import Places from './Places';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/places' element={<Places/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/r" element={<Register/>}/>
        <Route path="/hp/:username" element={<HomePage/>}/>
        <Route path="/Andhra" element={<Andhra/>}/>
        <Route path="/Karnataka" element={<Karnataka/>}/>
        <Route path="/Kerala" element={<Kerala/>}/>
        <Route path="/Tamilnadu" element={<Tamilnadu/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
