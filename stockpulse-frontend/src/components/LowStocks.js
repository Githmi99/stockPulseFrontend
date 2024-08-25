import React from 'react';
import './LowStocks.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const LowStocks = () => {

  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/dashboard');
  };


  const data = [
    { id: "#20462", product: "Resistor", partNo: "ncp18wb103Jb", value: "10K", qty: 4000, footprint: 805, description: "Delivered" },
    { id: "#19833", product: "Resistor", partNo: "71-CRCW060310R0JNEAC", value: "10 ohm", qty: 100, footprint: 603, description: "Delivered" },
    { id: "#45126", product: "Capacitor", partNo: "T491A104K035AT", value: "10nf", qty: 100, footprint: 1206, description: "Delivered" },
    { id: "#54306", product: "Capacitor", partNo: "0805B050K500NT", value: "10uf", qty: 10000, footprint: 805, description: "Process" },
    { id: "#11188", product: "Resistor", partNo: "RC0603FR-0751KL", value: "51k", qty: 100, footprint: 603, description: "Process" },
    { id: "#75003", product: "IC", partNo: "LP2950-33LPRE3", value: "10", qty: 10, footprint: 603, description: "Delivered" },
    { id: "#58525", product: "Resistor", partNo: "0603AF4F1023-TE", value: "42K", qty: 100, footprint: 603, description: "Process" },
    { id: "#64472", product: "Optocouplers", partNo: "CYPC817B-TP2", value: "10", qty: 100, footprint: 805, description: "Delivered" },
    { id: "#89094", product: "Connectors", partNo: "205-SWIT1002LD", value: "10", qty: 100, footprint: 603, description: "Cancelled" },
    { id: "#98532", product: "Relay", partNo: "Poppy-Rose", value: "22/10/2023", qty: 6950, footprint: "Transfer Bank", description: "Cancelled" }
  ];

  return (
    <div className="low-stocks">
    <Header title="Stocks" titlePrefix="Low" />
      <div className="search-filter">
        <input type="text" placeholder="Search here" className="search-input" />
        <button className="search-button">Search</button>
      </div>
      <table>
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.product}</td>
              <td>{item.partNo}</td>
              <td>{item.value}</td>
              <td>{item.qty}</td>
              <td>{item.footprint}</td>
              <td className={item.description.toLowerCase()}>{item.description}</td>
              <td>
                <button className="edit-button">✏️</button>
                <button className="delete-button">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="actions">
        <button className="purchase-button">Purchase</button>
         <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  );
};

export default LowStocks;
