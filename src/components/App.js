import '../styles/App.css';
import Footer from './Home/Footer';
import Hero from './Home/Hero';
import Menu from './Home/Menu';

function App() {
  return (
    <div className="App flex flex-col gap-2">
      <Hero/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;