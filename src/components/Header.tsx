import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="d-flex justify-content-between align-items-center" style={{ height: '80px', backgroundColor: 'var(--navy)', color: 'var(--cream)', padding: '0 1em' }}>
            <span style={{ fontSize: '24px' }}>Audio</span>
            <div className="dropdown">
                <button className="dropbtn" style={{ background: 'none', color: 'var(--cream)', border: 'none', fontSize: '16px' }}>Menu</button>
                <div className="dropdown-content">
                    <Link to="/">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/settings">Settings</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
