import React, { useState } from 'react';
import './CardCarousel.css';

const CardCarousel = ({ cards = [] }) => {
    const [activeIndex, setActiveIndex] = useState(1); // Start with middle card

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="card-carousel">
            <div className="cards-slider">
                {cards.map((card, index) => {
                    let offset = index - activeIndex;
                    let absOffset = Math.abs(offset);
                    let className = 'carousel-card';

                    if (offset === 0) className += ' active';
                    else if (offset < 0) className += ' left';
                    else className += ' right';

                    return (
                        <div
                            key={index}
                            className={className}
                            style={{
                                '--offset': offset,
                                '--abs-offset': absOffset,
                                zIndex: 10 - absOffset
                            }}
                            onClick={() => handleCardClick(index)}
                        >
                            <img src={card.image} alt={card.title} />
                            <div className="card-glow"></div>
                        </div>
                    );
                })}
            </div>
            <div className="carousel-controls">
                <div className="card-info">
                    <h3>{cards[activeIndex]?.title || 'Unknown'}</h3>
                    <p>{cards[activeIndex]?.desc || 'Elemental Power'}</p>
                </div>
            </div>
        </div>
    );
};

export default CardCarousel;
