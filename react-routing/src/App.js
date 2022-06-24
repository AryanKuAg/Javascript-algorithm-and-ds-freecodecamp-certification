import {Route, Routes} from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/aryan' element={<Welcome />} />
        
     
      <Route path='/agrawal' element={<Products />} />
        
     </Routes>
     
    </div>
  );
}

export default App;
