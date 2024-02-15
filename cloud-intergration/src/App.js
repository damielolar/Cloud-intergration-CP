import Navbar from './components/navbar';
import './App.css';
import About from './components/about';
import MapContainer from './map/map';
// import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <About/>
      <MapContainer/>
    </div>
  );
}

export default App;
