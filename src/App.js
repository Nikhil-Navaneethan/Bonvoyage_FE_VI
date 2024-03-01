import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './/Login';
import Register from './/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/l" element={<Login/>}/>
        <Route path="/r" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
