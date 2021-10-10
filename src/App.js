import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/sections/home/Home';
import About from './components/sections/about/About';

function App() {
  return (
    <div className='main-container'>
      <Navbar/>
      <section className='content'>
        <section className='home'><Home/></section>
        <section className='about'><About/></section>
        <section className='timeline'></section>
        <section className='projects'></section>
        <section className='contact'></section>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
