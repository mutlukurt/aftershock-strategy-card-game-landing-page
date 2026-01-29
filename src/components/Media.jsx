import React, { useState } from 'react';
import trailer from '../assets/video.mp4';
import wall1 from '../assets/1.jpeg';
import wall2 from '../assets/2.jpeg';
import wall3 from '../assets/3.jpeg';
import './PageStyles.css';

const Media = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="page-container media-page">
            <header className="page-header">
                <h1>Media</h1>
                <p>Witness the world of Aftershock.</p>
            </header>

            <section className="media-section">
                <h2>Trailers</h2>
                <div className="video-container">
                    <video width="100%" controls>
                        <source src={trailer} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <section className="media-section">
                <h2>Wallpapers</h2>
                <div className="gallery-grid">
                    <div className="gallery-item item-1" onClick={() => setSelectedImage(wall1)}></div>
                    <div className="gallery-item item-2" onClick={() => setSelectedImage(wall2)}></div>
                    <div className="gallery-item item-3" onClick={() => setSelectedImage(wall3)}></div>
                </div>
            </section>

            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Wallpaper" />
                        <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Media;
