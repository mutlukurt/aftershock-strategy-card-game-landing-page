import React from 'react';
import './PageStyles.css';

const Support = () => {
    return (
        <div className="page-container support-page">
            <header className="page-header">
                <h1>Support</h1>
                <p>We are here to help.</p>
            </header>

            <div className="support-content">
                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-item">
                        <h3>When is the release date?</h3>
                        <p>Aftershock is currently in closed beta. Global release is targeted for late 2026.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Is it pay-to-win?</h3>
                        <p>No. We are committed to a fair, cosmetic-focused monetization model.</p>
                    </div>
                    <div className="faq-item">
                        <h3>System Requirements?</h3>
                        <p>Any modern browser. Dedicated desktop client coming soon.</p>
                    </div>
                </section>

                <section className="contact-section">
                    <h2>Contact Us</h2>
                    <form className="contact-form">
                        <input type="text" placeholder="Subject" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Describe your issue..."></textarea>
                        <button className="btn-primary">Submit Ticket</button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Support;
