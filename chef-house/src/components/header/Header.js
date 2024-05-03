import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const handleLogout = () => {
    // Clear user information from state
    setUserInfo(null);

    // Clear user information from local storage
    localStorage.removeItem('userInfo');

    // Redirect to the login page after logout
    navigate('/login');
    
  };

  console.log(userInfo)
  return (
    <div>
      <nav className="main-header navbar navbar-expand bg-info">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" style={{ color: 'black' }}>
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link" style={{ color: 'black' }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" style={{ color: 'black' }}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link" style={{ color: 'black' }}>
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '10px' }} />
              Cart
            </Link>
          </li>
          {userInfo ? (
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: 'black' }}
              >
                {userInfo.username}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/profile" className="dropdown-item">
                  Profile
                </Link>
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </li>
          ) : (
            <li className='nav-item'>
              <Link to="/login" className="nav-link" style={{ color: 'black' }}>
                <i className="fa fa-user" aria-hidden="true"></i> Login
              </Link>
            </li>
          )}
        </ul>
        {/* SEARCH FORM */}
        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
      </nav>
    </div>
  );
};

export default Header;
