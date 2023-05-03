import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
          <Routes>
          
          
            
          <Route path="/checkout" element={[<Header/>,<Checkout/> ]} />
          <Route path="/" element={[<Header/>,<Home/>]}/>
          
          

          
          </Routes>
      
        
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
