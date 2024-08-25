import React, { useState } from 'react';
import './LendComponentsPage.css'; // Import the CSS file for styling
import { FaSearch, FaExclamationTriangle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Import icons
import Header from './Header';
import LendingDialog from './LendingRequest'; // Ensure this is the correct import
import { useNavigate } from 'react-router-dom';

const LendComponentsPage = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    // Function to handle showing the modal
    const handleAddButtonClick = () => {
        setModalVisible(true);
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const navigate = useNavigate();

    // Function to handle the cancel button click
    const handleCancelClick = () => {
        navigate('/dashboard');
    };

    return (
        <div className={`lend-components-page ${isModalVisible ? 'blur-background' : ''}`}>
            <Header title="Components" titlePrefix="Lend" />
            <div className="content">
                <h2 className="page-title">Lend Components</h2>
                <div className="search-sort-bar">
                    <input type="text" placeholder="Search here" className="search-input" />
                    <FaSearch className="search-icon" />
                    <button className="sort-button">Sort By</button>
                </div>

                <table className="components-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Stock ID</th>
                            <th>Borrower ID</th>
                            <th>Borrowed Date</th>
                            <th>Due Date</th>
                            <th>Notes</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#7676</td>
                            <td>E104</td>
                            <td>02/05/2023</td>
                            <td>12/05/2023</td>
                            <td>None</td>
                            <td><FaCheckCircle className="status-icon completed" /> Completed</td>
                        </tr>
                        <tr className="highlight">
                            <td><input type="checkbox" /></td>
                            <td>#7675</td>
                            <td>IN3212</td>
                            <td>15/03/2024</td>
                            <td>31/03/2024</td>
                            <td>None</td>
                            <td><FaExclamationTriangle className="status-icon pending" /> Pending</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#7676</td>
                            <td>EX10</td>
                            <td>01/02/2024</td>
                            <td>15/02/2024</td>
                            <td>Damaged</td>
                            <td><FaCheckCircle className="status-icon completed" /> Completed</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#7676</td>
                            <td>EX12</td>
                            <td>18/03/2024</td>
                            <td>24/03/2024</td>
                            <td>Error occur</td>
                            <td><FaTimesCircle className="status-icon error" /> Error</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#7676</td>
                            <td>IN3212</td>
                            <td>25/02/2024</td>
                            <td>03/03/2024</td>
                            <td>None</td>
                            <td><FaCheckCircle className="status-icon completed" /> Completed</td>
                        </tr>
                    </tbody>
                </table>

                <div className="action-buttons">
                    <button className="add-btn" onClick={handleAddButtonClick}>Add Lending Component</button>
                    <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
                </div>
            </div>

            {/* Modal Component */}
            <LendingDialog isVisible={isModalVisible} onClose={handleCloseModal} />
        </div>
    );
};

export default LendComponentsPage;
