import React from 'react';
import './Purchases.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Purchases = () => {
  const navigate = useNavigate();

  const handleAddPurchaseClick = () => {
    navigate('/add-purchase');
  };

  const handleCancelClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="purchases-container">
      <Header titlePrefix="Purchases" />
      <header className="header">
        <input type="text" placeholder="Enter Value" aria-label="Enter Value" />
        <input type="text" placeholder="Search here" aria-label="Search here" />
        <select aria-label="Select Order ID">
          <option value="order-id">Order ID</option>
        </select>
      </header>
      <table className="purchases-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Payment link or Shop</th>
            <th>Cost (Rs)</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#7676</td>
            <td>Resistor</td>
            <td>1000</td>
            <td>Store name</td>
            <td>1020</td>
            <td>02/11/2022</td>
            <td className="status unpaid">Unpaid</td>
          </tr>
          <tr>
            <td>#7677</td>
            <td>Resistor</td>
            <td>3000</td>
            <td>www.tronic.lk</td>
            <td>2300</td>
            <td>16/08/2023</td>
            <td className="status paid">Paid</td>
          </tr>
          <tr>
            <td>#7678</td>
            <td>Capacitor</td>
            <td>150</td>
            <td>Store name</td>
            <td>560</td>
            <td>04/12/2023</td>
            <td className="status paid">Paid</td>
          </tr>
          <tr>
            <td>#7679</td>
            <td>Relay</td>
            <td>25</td>
            <td>www.mouser.com</td>
            <td>1960</td>
            <td>21/01/2024</td>
            <td className="status paid">Paid</td>
          </tr>
          <tr>
            <td>#7680</td>
            <td>IC</td>
            <td>5</td>
            <td>Store name</td>
            <td>2578</td>
            <td>01/03/2024</td>
            <td className="status paid">Paid</td>
          </tr>
        </tbody>
      </table>
      <div className="actions">
        <button className="add-btn" onClick={handleAddPurchaseClick}>Add Purchase</button>
        <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  );
}

export default Purchases;
