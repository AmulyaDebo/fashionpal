import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homescreen from './screens/Homescreen'; 
import {BrowserRouter, Routes,Route} from 'react-router-dom';

import Proddescscreen from './screens/Proddescscreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      
     <BrowserRouter>
   
     <Routes>
    
     <Route exact path='/' element={<Homescreen />} />
     <Route exact path='/product/:id' element={<Proddescscreen />} />
   
     </Routes>
    

   

     </BrowserRouter>
    
    </div>
  );
}

export default App;
