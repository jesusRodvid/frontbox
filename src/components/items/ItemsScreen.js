import React, { useState, useEffect } from "react";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import ItemService  from "../services/ItemService";
import { BsPlusLg } from "react-icons/bs";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ItemRow } from "./rows/ItemRow";


export const ItemsScreen = () => {
  const [items, setItems] = useState([]);

  const retrieveItems = () => {
    ItemService.getAllItems()
      .then((response) => {
        setItems(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveItems();
  }, []);

  return (
    <div>
      <Container fluid className="mb-3">
        <Row>
          <Col sm={8}>
            <h2>Item list.</h2>
          </Col>
          <Col sm={4} className="d-flex justify-content-end">
            <Link className="text-decoration-none" to={"/add/item"}>
              <Button
                className="d-flex align-items-center"
                variant="outline-success"
              >
                <BsPlusLg size="1rem" /> <span className="p-1">New Item</span>
              </Button>{" "}
            </Link>
          </Col>
        </Row>
      </Container>

      <Table responsive striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Item code</th>
            <th>Description</th>
            <th>Price</th>
            <th>State</th>
            <th>Creation date</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item) => (
              <ItemRow key={item.idItem} item={item} />
                
            ))}
        </tbody>
      </Table>
    </div>
  );
};
