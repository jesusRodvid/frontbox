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
        const supplier = allSuppliers.find(element=> element.id === event.target.idSupplier);
        handleSuppliersChange(supplier)
        console.log(supplier);

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
                    <span className="p-1">Associate suppliers</span>
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
                        {allSuppliers.map((supplier) =>
                            <Form.Check 
                                key={supplier.idSupplier} 
                                id={supplier.idSupplier}
                                name={supplier.name} 
                                country={supplier.country}
                                label={supplier.name} 
                                type="checkbox"
                                value={supplier.idSupplier}
                                onChange={handleChange}
                                defaultChecked={suppliers && suppliers.find(element => element.id === supplier.idSupplier) &&
                                    "checked"
                                }
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

