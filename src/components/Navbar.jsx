import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/CandB_files/Logo.png';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Career', path: '/career' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Contact', path: '/contact' },
  ];

  const manufacturingLinks = [
    { label: 'Pumps', path: '/manufacturing/pumps' },
    { label: 'Drains', path: '/manufacturing/drains' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute top-0 start-0 w-100 px-4 py-3" style={{ zIndex: 10 }}>
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" height="50" />
      </Link>

      <button
        className="navbar-toggler border-0"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="text-white fs-1">{menuOpen ? '✕' : '☰'}</span>
      </button>

      <div
        className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`}
        style={{
          backgroundColor: menuOpen ? 'rgba(0,0,0,0.6)' : 'transparent',
          backdropFilter: menuOpen ? 'blur(10px)' : 'none',
          borderRadius: '10px',
          transition: 'all 0.4s ease',
        }}
      >
        <ul className="navbar-nav gap-4 text-center">
          {navLinks.map(({ label, path }) => (
            <li className="nav-item" key={label}>
              <Link
                className="nav-link text-white fs-5 nav-underline"
                to={path}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}

          <li className="nav-item dropdown position-relative" ref={dropdownRef}>
            <span
              className="nav-link text-white fs-5 dropdown-toggle"
              style={{ cursor: 'pointer' }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Manufacturing
            </span>

            {dropdownOpen && (
              <div className="position-absolute mt-2 bg-white bg-opacity-10 backdrop-blur rounded-3 p-2" style={{ zIndex: 20 }}>
                <ul className="list-unstyled m-0">
                  {manufacturingLinks.map(({ label, path }) => (
                    <li key={label}>
                      <Link
                        to={path}
                        className="dropdown-item text-white px-2 py-1"
                        onClick={() => {
                          setDropdownOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
