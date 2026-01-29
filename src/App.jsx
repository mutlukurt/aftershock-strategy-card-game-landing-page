import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Media from './components/Media';
import Community from './components/Community';
import Support from './components/Support';
import './App.css';

// Component for the Home Page content
const Home = () => (
    <>
        <Hero />
        <Features />
    </>
);

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/support" element={<Support />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
