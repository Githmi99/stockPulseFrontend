import React, { useState } from 'react';
import './BoMOrdering.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FaTrashAlt, FaEdit } from 'react-icons/fa'; // Icons for edit and delete
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const BoMOrdering = () => {
    const [items, setItems] = useState([{ id: 1, value: '' }, { id: 2, value: '' }, { id: 3, value: '' }]);
    const [inStock, setInStock] = useState([]);
    const [notInStock, setNotInStock] = useState([]);
    const [searched, setSearched] = useState(false);

    const handleAddItem = () => {
        const newItem = { id: items.length + 1, value: '' };
        setItems([...items, newItem]);
    };

    const handleInputChange = (id, newValue) => {
        setItems(items.map(item => item.id === id ? { ...item, value: newValue } : item));
    };

    const handleDeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleSearchInStock = () => {
        // Mock search logic
        const stock = items.filter((item, index) => index % 2 === 0);
        const noStock = items.filter((item, index) => index % 2 !== 0);
        setInStock(stock);
        setNotInStock(noStock);
        setSearched(true);
    };
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate('/dashboard');
      };
    

    return (
        <div className='bom-ordering-container'>
        <Header title ="Ordering" titlePrefix="BoM" />

            <Row>
                <Col md={2} className="sidebar">
                    {/* Navigation Panel */}
                </Col>
                <Col md={10} className="main-content">
                    {/* Header */}
                    <header className="header">
                        {/* Header component */}
                    </header>
                    <div className="bom-ordering-content">
                        <Form>
                            <Form.Group controlId="formCircuitName">
                                <Form.Label>Circuit</Form.Label>
                                <Form.Control type="text" placeholder="Enter circuit name" />
                            </Form.Group>
                            <Form.Group controlId="formBOM">
                                <Form.Label>BOM</Form.Label>
                                {items.map(item => (
                                    <div key={item.id} className="bom-item">
                                        <Form.Control
                                            type="text"
                                            placeholder={`Item ${item.id}`}
                                            value={item.value}
                                            onChange={(e) => handleInputChange(item.id, e.target.value)}
                                        />
                                        <Button variant="link" className="edit-btn"><FaEdit /></Button>
                                        <Button variant="link" className="delete-btn" onClick={() => handleDeleteItem(item.id)}><FaTrashAlt /></Button>
                                    </div>
                                ))}
                                <Button variant="link" className="add-more" onClick={handleAddItem}>Add more</Button>
                            </Form.Group>
                            <Button variant="primary" type="button" className="search-btn" onClick={handleSearchInStock}>Search in Stock</Button>
                            <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
                        </Form>

                        {searched && (
                            <div className="stock-results">
                                <Row>
                                    <Col md={6}>
                                        <div className="stock-list not-in-stock">
                                            <h5>Not in Stock</h5>
                                            <ul>
                                                {notInStock.map(item => (
                                                    <li key={item.id}>{item.value}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="stock-list in-stock">
                                            <h5>In Stock</h5>
                                            <ul>
                                                {inStock.map(item => (
                                                    <li key={item.id}>{item.value}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                                <Button variant="success" type="button" className="send-approval-btn">Send For Executive Approval</Button>
                                <Button variant="danger" type="button" className="cancel-approval-btn">Cancel</Button>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default BoMOrdering;