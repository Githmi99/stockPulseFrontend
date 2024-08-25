// src/components/ComponentList.js

import React, { useState } from 'react';
import './ComponentList.css';
import AddRequest from './AddRequest'; // Import the AddRequest component
import AddComponent from './AddComponent'; // Import the AddComponent component
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const ComponentList = () => {
  const [isAddRequestVisible, setAddRequestVisible] = useState(false);
  const [isAddComponentVisible, setAddComponentVisible] = useState(false); // State for AddComponent modal

  const toggleAddRequest = () => {
    setAddRequestVisible(!isAddRequestVisible);
  };

  const toggleAddComponent = () => {
    setAddComponentVisible(!isAddComponentVisible);
  };

  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/dashboard');
  };

  const components = [
    { id: '#20462', product: 'Resistor', partNo: 'ncp18xh103f03rb', value: '10k', qty: 4000, footprint: '805', description: 'Delivered' },
    { id: '#18933', product: 'Resistor', partNo: '71-CRCW060310K0JNEAC', value: '10 ohm', qty: 100, footprint: '603', description: 'Delivered' },
    { id: '#45169', product: 'Capacitor', partNo: 'T491A104K035AT', value: '100nf', qty: 1, footprint: '1206', description: 'Process' },
    { id: '#34304', product: 'Capacitor', partNo: '0805B105K500NT', value: '10uf', qty: 10000, footprint: '805', description: 'Process' },
    { id: '#17188', product: 'Resistor', partNo: 'RC0603FR-0751KL', value: '51k', qty: 10, footprint: '603', description: 'Cancelled' },
    { id: '#73003', product: 'IC', partNo: '926-LP2985AIM5X-3.3/NOPB', value: '', qty: 1, footprint: '', description: 'Delivered' },
    { id: '#58825', product: 'Resistor', partNo: '0603WAF4023T5E', value: '402k', qty: 100, footprint: '603', description: 'Delivered' },
    { id: '#44222', product: 'Optocouplers', partNo: 'CYPC817(B)-TP2', value: '', qty: 50, footprint: '', description: 'Delivered' },
    { id: '#89094', product: 'Connectors', partNo: '200-SSW10Q02LD', value: '', qty: 20, footprint: '', description: 'Cancelled' },
    { id: '#85252', product: 'Relay', partNo: 'Poppy-Rose', value: '22/10/2023', qty: 6950, footprint: 'Transfer Bank', description: 'Process' },
  ];

  return (
    <div className="dashboard-container">
      <Header title="Components" titlePrefix="Search" />
      <div className={`component-list-container ${isAddRequestVisible || isAddComponentVisible ? 'blur-background blur-transition' : ''}`}>
        <div className="filter-search">
          <div className="filter">
            <select>
              <option>Pick an option</option>
              <option>Resistor</option>
              <option>Capacitor</option>
              <option>IC</option>
              <option>Optocouplers</option>
              <option>Connectors</option>
              <option>Relay</option>
            </select>
            <select>
              <option>Pick an option</option>
              <option>Value</option>
              <option>Qty</option>
              <option>Footprint</option>
              <option>Description</option>
            </select>
            <input type="text" placeholder="Enter Value" />
          </div>
          <button className="search-btn">Search</button>
          <button className="filter-btn">Filter By</button>
        </div>
        <table className="component-table">
          <thead>
            <tr>
              <th>Stock ID</th>
              <th>Product</th>
              <th>Part No</th>
              <th>Value</th>
              <th>Qty</th>
              <th>Footprint</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {components.map((component) => (
              <tr key={component.id}>
                <td>{component.id}</td>
                <td>{component.product}</td>
                <td>{component.partNo}</td>
                <td>{component.value}</td>
                <td>{component.qty}</td>
                <td>{component.footprint}</td>
                <td className={component.description.toLowerCase()}>{component.description}</td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button className="delete-btn">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="action-buttons">
          <button onClick={toggleAddRequest} className="btn-request">Request</button>
          <button onClick={toggleAddComponent} className="btn-add">Add</button>
          <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>

      {/* Add Request Modal */}
      {isAddRequestVisible && <AddRequest visible={isAddRequestVisible} onClose={() => setAddRequestVisible(false)} />}
      
      {/* Add Component Modal */}
      {isAddComponentVisible && <AddComponent visible={isAddComponentVisible} onClose={() => setAddComponentVisible(false)} />}
    </div>
  );
};

export default ComponentList;
