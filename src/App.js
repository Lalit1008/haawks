import './App.css';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Missionvision from './components/Missionvision';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Tokenomics from './components/Tokenomics';
import Ctawimage from './components/Ctawimage';
import Newsletter from './components/Newsletter';
import Services from './components/Services';
import Roadmapcarousel from './components/Roadmapcarousel';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Missionvision />
      <Services />
      <Newsletter />
      <Tokenomics />
      <Roadmapcarousel />
      <Team />
      <Ctawimage />
      <Faq />
      <Footer/>
    </div>
  );
}

export default App;
