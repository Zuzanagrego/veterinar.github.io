import './App.css';
import Header from './header/Header.tsx';
import Intro from './sections/intro/Intro.tsx';
import Achievements from './sections/achievements/Achievements.tsx';
import About from './sections/about/About.tsx';

function App() {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <Achievements />
      <About />
    </div>
  );
}

export default App;
