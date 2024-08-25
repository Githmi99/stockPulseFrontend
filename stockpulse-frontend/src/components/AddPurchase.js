import React from 'react';
import './AddPurchase.css';
import Header from './Header';

const AddPurchase = () => {
  return (
    <div className="add-purchase-container">
      <Header title="Purchase" titlePrefix="Add" />
      <form className="add-purchase-form">
        <div className="form-group">
          <label>Add Component details:</label>
          <button className="add-component-btn">+</button>
        </div>
        <div className="form-group">
          <label>Total Cost of order:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Date you wanted components:</label>
          <input type="date" />
        </div>
        <table className="order-details-table">
          <thead>
            <tr>
              <th>Part No</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Payment link or Shop</th>
              <th>Cost(Rs)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NE555</td>
              <td>Resistor</td>
              <td>1000</td>
              <td>Nilabara Electronics</td>
              <td>1020</td>
              <td>02/11/2022</td>
            </tr>
            <tr>
              <td>SPH4576</td>
              <td>Resistor</td>
              <td>3000</td>
              <td>www.tronic.lk</td>
              <td>2300</td>
              <td>16/08/2023</td>
            </tr>
            <tr>
              <td>VSS5638</td>
              <td>Capacitor</td>
              <td>150</td>
              <td>Store name</td>
              <td>560</td>
              <td>04/12/2023</td>
            </tr>
          </tbody>
        </table>
        <div className="actions">
          <button className="add-btn">Add</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}
//commit test
export default AddPurchase;