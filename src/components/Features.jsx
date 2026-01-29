import React from 'react';
import CardCarousel from './CardCarousel';
import cardFire from '../assets/card_fire.png';
import cardWater from '../assets/card_water.png';
import cardEarth from '../assets/card_earth.png';
import cardAir from '../assets/card_air.png';
import cardLightning from '../assets/card_lightning.png';
import cardNecro from '../assets/card_necro.png';
import cardMystic from '../assets/card_mystic.png';
import './Features.css';

const cardsData = [
    { image: cardWater, title: 'Water Spirit', desc: 'Control the tides.' },
    { image: cardFire, title: 'Fire Elemental', desc: 'Burn them all.' },
    { image: cardEarth, title: 'Earth Golem', desc: 'Unstoppable force.' },
    { image: cardAir, title: 'Air Spirit', desc: 'Swift justice.' },
    { image: cardLightning, title: 'Storm Bringer', desc: 'Thunder rolls.' },
    { image: cardNecro, title: 'Necromancer', desc: 'Death is a beginning.' },
    { image: cardMystic, title: 'Mystic Dragon', desc: 'Ancient wisdom.' },
];

const Features = () => {
    return (
        <div className="features-container">
            {/* Section 1: What is Aftershock */}
            <section className="feature-section" id="about">
                <div className="feature-content" data-aos="fade-right">
                    <h2>What is <span className="highlight-text">Aftershock?</span></h2>
                    <div className="divider"></div>
                    <p>
                        Aftershock is a revolutionary blend of <strong>Collectible Card Game</strong> and
                        <strong> Hexagonal Strategy</strong>.
                    </p>
                    <p>
                        Build your deck, summon elemental titans, and reshape the very earth beneath your
                        enemies' feet. Every match is a new landscape, every turn a seismic shift in power.
                    </p>
                    <ul className="feature-list">
                        <li>Living Battlefields that change during combat</li>
                        <li>Deep Deckbuilding with over 400 cards</li>
                        <li>Cross-platform competitive matchmaking</li>
                    </ul>
                </div>
                <div className="feature-image" data-aos="fade-left">
                    <CardCarousel cards={cardsData} />
                </div>
            </section>

            {/* Section 2: How to Play */}
            <section className="feature-section alt-layout" id="gameplay">
                <div className="feature-image" data-aos="fade-right">
                    <div className="image-frame-video">
                        <img src="/src/assets/gameplay.png" alt="Gameplay Map" />
                        <div className="play-icon">▶</div>
                    </div>
                </div>
                <div className="feature-content" data-aos="fade-left">
                    <h2>Strategic <span className="highlight-text">Deep Dive</span></h2>
                    <div className="divider"></div>
                    <p>
                        Place lands to build your path to the enemy god. Harvest Faeria to summon your creatures.
                        Position matters - flank your opponents, secure wells, and defend your orb.
                    </p>
                    <div className="feature-grid">
                        <div className="grid-item">
                            <h3>Build</h3>
                            <p>Create the board as you play.</p>
                        </div>
                        <div className="grid-item">
                            <h3>Summon</h3>
                            <p>Bring legends to life.</p>
                        </div>
                        <div className="grid-item">
                            <h3>Conquer</h3>
                            <p>Destroy the enemy God.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
