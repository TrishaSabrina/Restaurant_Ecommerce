import React from "react";
import { Link } from "react-router-dom";
import './menu.css';
const Menu = () => {
  return (
    <div>
      <aside className="main-sidebar bg-info elevation-4">
        {/* Brand Logo */}
        <a href="/" className="brand-link">
          <img src="dist/img/hat.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light" style={{ color: 'black' }}><h4><b>kitchener's Spell</b></h4></span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/trishas.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block" style={{ color: 'black' }}><p>Trisha Ibtesham</p></a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
              {/* <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p style={{ color: 'black' }}>
                Dashboard
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p style={{ color: 'black' }}>Dashboard v1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p style={{ color: 'black' }}>Dashboard v2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p style={{ color: 'black' }}>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li> */}

              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p className="text" style={{ color: 'black' }}>
                    Dashboard
                  </p>
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p className="text" style={{ color: 'black' }}>
                    Widgets
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p className="text" style={{ color: 'black' }}>
                    Category
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right" style={{ color: 'black' }}>6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                     <Link to="/spicy" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p className="text" style={{ color: 'black' }}>Spicy Food</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/thali" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p className="text" style={{ color: 'black' }}>Bengali Thali</p>
                    </Link>
                  </li>
               
                  <li className="nav-item">
                  <Link to="/desert" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p className="text" style={{ color: 'black' }}>Sweet Dessert</p>
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p className="text" style={{ color: 'black' }}>
                    Foods
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  )
}
export default Menu;