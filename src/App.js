import logo from './logo.svg';
import './App.css';
import { LandingPage } from './Components/LandingPage';
import { Header } from './Components/Header';
import { SocialFollow } from './Components/SocialFollow';

function App() {
  return (
    <div className="App">
      <SocialFollow/>
      <LandingPage/>
    </div>
  );
}

export default App;
