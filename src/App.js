import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Mentorship from './components/Mentorship';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Mentorship/>
      <Contact/>
    </div>
  );
}
