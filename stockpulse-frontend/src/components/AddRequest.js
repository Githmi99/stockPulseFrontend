// AddRequest.js
import React from 'react';
import './AddRequest.css'; // Import the updated CSS for styling

const AddRequest = ({ visible, onClose }) => {
  if (!visible) return null; // Do not render if not visible

  return (
    <div className="add-request-overlay">
      <div className="add-request-content">
        <h2>Add Request</h2>
        <form>
          <div className="form-group">
            <label htmlFor="partNo">Part No</label>
            <input type="text" id="partNo" name="partNo" placeholder="Enter part number" />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" placeholder="Enter quantity" />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfNeed">Date of Need</label>
            <input type="date" id="dateOfNeed" name="dateOfNeed" />
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

export default AddRequest;
