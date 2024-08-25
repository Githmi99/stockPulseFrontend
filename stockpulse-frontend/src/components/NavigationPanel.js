import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaCog, FaBoxOpen, FaShoppingCart, FaClipboardList, FaHandHoldingUsd, FaChartLine } from 'react-icons/fa';
import './NavigationPanel.css';

const NavigationPanel = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <div className="navigation-panel">
      <div onClick={goToLogin} className="logo"><h2>STOCKPULSE</h2></div>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              <FaTachometerAlt className="nav-icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/components" activeClassName="active">
              <FaCog className="nav-icon" />
              <span>Components</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/lowstocks" activeClassName="active">
              <FaBoxOpen className="nav-icon" />
              <span>Low Stocks</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/purchases" activeClassName="active">
              <FaShoppingCart className="nav-icon" />
              <span>Purchasing</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/bom-ordering" activeClassName="active">
              <FaClipboardList className="nav-icon" />
              <span>BoM Ordering</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/lending" activeClassName="active">
              <FaHandHoldingUsd className="nav-icon" />
              <span>Lending</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" activeClassName="active">
              <FaChartLine className="nav-icon" />
              <span>Analytics</span>
            </NavLink>
          </li>
          {/* Add other nav links here */}
        </ul>
      </nav>
      <div className="settings-help">
        <NavLink to="/settings" activeClassName="active">
          <FaCog className="nav-icon" />
          <span>Settings</span>
        </NavLink>
        <NavLink to="/help" activeClassName="active">
          Help Centre
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationPanel;
