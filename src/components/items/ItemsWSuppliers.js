import React, {useState, useEffect} from "react";
import {Row, Col, Button, Modal, Form, Container} from 'react-bootstrap';
import { BsPlusLg } from "react-icons/bs";
import { ItemsWSuppTable } from './ItemsWSuppTable';
import SuppliersService from "../services/SuppliersService";

export const ItemsWSuppliers = ({handleSuppliersChange, suppliers}) => {

    const [allSuppliers, setAllSuppliers] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const retrieveSuppliers = () => {
        SuppliersService.getAllSuppliers()
            .then(response => { setAllSuppliers(response.data); })
            .catch(e => { console.log(e); });
    };

    const handleChange = (event) => {
        const supplier = allSuppliers.find(idSupplier=> idSupplier.idSupplier  ===  parseInt(event.target.id));
        
        handleSuppliersChange(supplier)
        console.log(event.target.id);
    }

    useEffect(() => { 
        retrieveSuppliers();
    }, []);

    return (
        <Container>
            <Row className="mb-4">
                <Col className="d-flex align-items-end" sm={10}>
                <h5>Suppliers</h5>
                </Col>

                <Col sm={2}>
                <Button className="d-flex align-items-center" size="sm" variant="outline-primary" onClick={()=>
                    handleShow(true)}
                    >
                    <BsPlusLg size=".6rem" />{" "}
                    <span className="p-1">Select suppliers</span>
                </Button>{" "}
                </Col>
            </Row>

            <Row>
                <Col>
                    <ItemsWSuppTable suppliers={suppliers}></ItemsWSuppTable>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Associate suppliers
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {allSuppliers.map((supplier, key) =>
                            <Form.Check 
                                key={key} 
                                id={supplier.idSupplier}
                                name={supplier.name} 
                                country={supplier.country}
                                label={supplier.name} 
                                type="checkbox"
                                onChange={handleChange}
                               
                            />
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

