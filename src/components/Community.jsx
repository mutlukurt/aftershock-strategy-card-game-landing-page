import React from 'react';
import { MessageSquare, Users, Globe } from 'lucide-react';
import './PageStyles.css';

const Community = () => {
    return (
        <div className="page-container community-page">
            <header className="page-header">
                <h1>Community</h1>
                <p>Join the conversation. Shape the meta.</p>
            </header>

            <div className="community-grid">
                <div className="community-card">
                    <MessageSquare size={48} className="icon" />
                    <h3>Official Discord</h3>
                    <p>Chat with developers and other players in real-time.</p>
                    <button className="btn-secondary">Join Server</button>
                </div>
                <div className="community-card">
                    <Users size={48} className="icon" />
                    <h3>Forums</h3>
                    <p>Participate in deep strategy discussions and lore theories.</p>
                    <button className="btn-secondary">Visit Forums</button>
                </div>
                <div className="community-card">
                    <Globe size={48} className="icon" />
                    <h3>Esports</h3>
                    <p>Sign up for upcoming tournaments and events.</p>
                    <button className="btn-secondary">Compete</button>
                </div>
            </div>
        </div>
    );
};

export default Community;
