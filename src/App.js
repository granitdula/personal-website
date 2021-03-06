import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/sections/home/Home';
import About from './components/sections/about/About';
import Timeline from './components/sections/timeline/Timeline';
import Projects from './components/sections/projects/Projects';
import Contact from './components/sections/contact/Contact';

function App() {
  return (
    <div className='main-container'>
      <Navbar/>
      <section className='content'>
        <section className='home'><Home/></section>
        <section className='about'><About/></section>
        <section className='timeline'><Timeline/></section>
        <section className='projects'><Projects/></section>
        <section className='contact'><Contact/></section>
      </section>
      <footer>Granit Dula's Personal Page, 2022</footer>
    </div>
  );
}

export default App;
