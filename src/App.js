import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Pricing from './components/Pricing/Pricing';
import Marks from './components/Marks/Marks';
import PhoneBar from './components/PhoneBar/PhoneBar';

function App() {
  return (
    
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <Marks></Marks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
