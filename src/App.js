import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer/footer';
import Body from './Components/Body/body';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
