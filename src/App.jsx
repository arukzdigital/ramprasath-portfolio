import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Experience from './components/sections/Experience/Experience';
import Reel from './components/sections/Reel/Reel';
import Gallery from './components/sections/Gallery/Gallery';
import Contact from './components/sections/Contact/Contact';

function App() {
    return (
        <>
            <a href="#main-content" className="skip-link">Skip to content</a>
            <Navbar />
            <main id="main-content">
                <Hero />
                <About />
                <Reel />
                <Gallery />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
