import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <div className="logo-icon">T</div>
          <div className="logo-text">
            <span className="brand"><span> My Tax</span></span>
            <span className="tagline"></span>
          </div>
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/services">Services</NavLink>
          {/* <NavLink to="/query">Query</NavLink> */}
          {/* <NavLink to="/career">Career</NavLink> */}
          <NavLink to="/contact">Contact</NavLink>
          {user?.role === 'admin' && <NavLink to="/admin">Dashboard</NavLink>}
        </nav>

        <div className="nav-actions">
          {!user ? (
            <Link to="/login">
              <button className="btn-login">Login</button>
            </Link>
          ) : (
            <button onClick={logout} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>
              Logout
            </button>
          )}
          <Link to="/contact">
            <button className="btn-premium">Get a Quote</button>
          </Link>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-nav open">
          <NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)}>About</NavLink>
          <NavLink to="/team" onClick={() => setMobileOpen(false)}>Team</NavLink>
          <NavLink to="/gallery" onClick={() => setMobileOpen(false)}>Gallery</NavLink>
          <NavLink to="/services" onClick={() => setMobileOpen(false)}>Services</NavLink>
          <NavLink to="/query" onClick={() => setMobileOpen(false)}>Query</NavLink>
          <NavLink to="/career" onClick={() => setMobileOpen(false)}>Career</NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink>
          {user?.role === 'admin' && <NavLink to="/admin" onClick={() => setMobileOpen(false)}>Dashboard</NavLink>}
          {!user ? (
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <button className="btn-login" style={{ width: '100%' }}>Login</button>
            </Link>
          ) : (
            <button onClick={() => { logout(); setMobileOpen(false); }} style={{ background: 'none', border: 'none', color: '#ef4444', textAlign: 'left', padding: '0.5rem 0' }}>
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}