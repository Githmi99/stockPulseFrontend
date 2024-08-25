import React from 'react';
import './LendingRequest.css'; // Import the CSS file

const LendingDialog = ({ isVisible, onClose }) => {
  if (!isVisible) {
      return null;
  }

  return (
      <div className="modal-overlay">
          <div className="modal">
              <h2>Add Lending Request</h2>
              <form>
                  <div>
                      <label>Stock ID</label>
                      <input type="text" name="stockId" />
                  </div>
                  <div>
                      <label>Borrower's ID</label>
                      <input type="text" name="borrowerId" />
                  </div>
                  <div>
                      <label>Borrowing Date</label>
                      <input type="date" name="borrowingDate" />
                  </div>
                  <div>
                      <label>Due Date</label>
                      <input type="date" name="dueDate" />
                  </div>
                  <button type="submit">Add</button>
                  <button type="button" onClick={onClose}>Cancel</button>
              </form>
          </div>
      </div>
  );
};

export default LendingDialog;
