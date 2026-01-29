import React, { useState } from 'react';
import Button from './Button';
import heroBg from '../assets/hero_bg.jpg';
import heroTrailer from '../assets/hero-trailer.mp4';
import logo from '../assets/logo_transparent.png';
import './Hero.css';

const Hero = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section
            className={`hero ${showVideo ? 'video-active' : ''}`}
            onClick={() => showVideo && setShowVideo(false)}
        >
            <div className="hero-background">
                {showVideo ? (
                    <video className="hero-video" autoPlay muted loop playsInline>
                        <source src={heroTrailer} type="video/mp4" />
                    </video>
                ) : (
                    <img src={heroBg} alt="Background" />
                )}
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <div className="hero-logo-container">
                    <img src={logo} alt="Aftershock Logo" className="hero-logo" />
                </div>

                <h1 className="hero-tagline">Strategy. Magic. Dominion.</h1>
                <p className="hero-subtitle">
                    Command the elements and reshape the battlefield in the next generation strategy card game.
                </p>

                <div className="hero-cta">
                    <Button variant="primary" className="hero-btn-primary">Beta Sign-up</Button>
                    <Button
                        variant="secondary"
                        className="hero-btn-secondary"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowVideo(true);
                        }}
                    >
                        Watch Trailer
                    </Button>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Explore</span>
                <div className="arrow"></div>
            </div>
        </section>
    );
};

export default Hero;
