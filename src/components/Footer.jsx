import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import Button from './Button';
import logo from '../assets/logo_transparent.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-cta">
                <h2>Join the <span className="highlight-text">Beta</span></h2>
                <p>Be among the first to shape the world of Aftershock.</p>
                <div className="newsletter-form">
                    <input type="email" placeholder="Enter your email address" />
                    <Button variant="primary">JOIN NOW</Button>
                </div>
            </div>

            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Aftershock" />
                </div>

                <div className="footer-socials">
                    <a href="#"><Facebook size={24} /></a>
                    <a href="#"><Twitter size={24} /></a>
                    <a href="#"><Instagram size={24} /></a>
                    <a href="#"><Youtube size={24} /></a>
                </div>

                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Press Kit</a>
                    <a href="#">Support</a>
                </div>

                <p className="copyright">
                    © 2026 Abrakam Entertainment. All rights reserved. <br />
                    Aftershock is a trademark of Abrakam Entertainment.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
