import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import MediaGallery from './components/MediaGallery/MediaGallery';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="app">
            <Hero />
            <About />
            <Experience />
            <MediaGallery />
            <Footer />
        </div>
    );
}

export default App;
