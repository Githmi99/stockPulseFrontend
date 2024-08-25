// src/components/AddComponent.js
import React from 'react';
import './AddComponent.css';

const AddComponent = ({ visible, onClose }) => {
  if (!visible) return null; // Render nothing if not visible

  return (
    <div className="add-component-overlay">
      <div className="add-component-modal">
        <h2>Add Components</h2>
        <form>
          <div className="form-group">
            <label htmlFor="componentType">Component Type</label>
            <select id="componentType" name="componentType">
              <option value="resistor">Resistor</option>
              <option value="capacitor">Capacitor</option>
              <option value="inductor">Inductor</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="partNo">Manufacture Part No</label>
            <input type="text" id="partNo" name="partNo" placeholder="Enter part number" />
          </div>
          <div className="form-group">
            <label htmlFor="value">Value</label>
            <input type="text" id="value" name="value" placeholder="Enter value" />
          </div>
          <div className="form-group">
            <label htmlFor="voltageRating">Voltage Rating</label>
            <input type="text" id="voltageRating" name="voltageRating" placeholder="Enter voltage rating" />
          </div>
          <div className="form-group">
            <label htmlFor="datasheets">Datasheets</label>
            <input type="text" id="datasheets" name="datasheets" placeholder="Enter datasheets" />
          </div>
          <div className="form-group">
            <label htmlFor="footprint">Footprint</label>
            <input type="text" id="footprint" name="footprint" placeholder="Enter footprint" />
          </div>
          <div className="form-group">
            <label htmlFor="approval">Approval</label>
            <input type="checkbox" id="approval" name="approval" />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-add">Add</button>
            <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddComponent;
