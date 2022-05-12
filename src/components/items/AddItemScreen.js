import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemService from "../services/ItemService";
import { toast } from "react-toastify";
import Toast from "../alerts/alert";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import UserService from "../services/UserService";
import { ItemsDiscount } from "./ItemsDiscount";
import { ItemsWSuppliers } from "./ItemsWSuppliers";

export const AddItemScreen = () => {
  const [allUsers, setAllUsers] = useState([]);

  const [item, setItem] = useState({
    description: "",
    price: "",
    state: "",
    suppliers: [],
    creationDate: "",
    discounts: [],
    creator: "",
  });

  const [validated, setValidated] = useState(false);
  const history = useNavigate();

  const retrieveUsers = () => {
    UserService.getAllSuppliers()
      .then((response) => {
        setAllUsers(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };
  //recoge el id del usuario seleccionado en el checkbox
  const handleChange = (event) => {
    const user = allUsers.find(
      (idUser) => idUser.idUser === parseInt(event.target.id)
    );

    handleUserChange(user);
    console.log(event.target.id);
  };

  const handleUserChange = (user) => {
    console.log(user);
    setItem({ ...item, creator: { idUser: user.idUser } });
  };

  const handleSuppliersChange = (supplier) => {
    item.suppliers.some((x) => x.id === supplier.id)
      ? setItem((item) => {
          return {
            ...item,
            suppliers: item.suppliers.filter((x) => x.id !== supplier.id),
          };
        })
      : setItem({ ...item, suppliers: [...item.suppliers, supplier] });
  };

  const handlePriceReductionsChange = (discount) => {
    setItem({ ...item, discounts: [...item.discounts, discount] });
  };

  useEffect(() => {
    retrieveUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    ItemService.createItems(item)
      .then((response) => {
        toast.success("Item created", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        console.log(response);
      })
      .catch((exception) => {
        console.log(exception);
      });
  };

  return (
    <Container className="p-5">
      <h2 className="mb-5">New item</h2>
      <Card bg="light" className="p-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Item price</Form.Label>
                <InputGroup>
                  <Form.Control
                    required
                    type="number"
                    min="0.00"
                    value={item.price}
                    name="price"
                    onChange={handleInputChange}
                  />
                  <InputGroup.Text>€</InputGroup.Text>
                </InputGroup>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid price.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Item description</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  name="description"
                  value={item.description}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid description.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicSelect">
                <Form.Label>Status</Form.Label>
                <InputGroup hasValidation>
                  <Form.Select
                    required
                    as="select"
                    name="state"
                    value={item.state}
                    onChange={handleInputChange}
                  >
                    <option value="">Choose an option</option>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Creation Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  name="creationDate"
                  format="dd/mm/yyyy"
                  value={item.creationDate}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <ItemsWSuppliers
            handleSuppliersChange={handleSuppliersChange}
            suppliers={item.suppliers}
          />
          <ItemsDiscount
            handlePriceReductionsChange={handlePriceReductionsChange}
            priceReductions={item.discounts}
          />
          
          <Form.Label>Who is creating the Item?</Form.Label>

            {allUsers.map((user, key) => (
              <Form.Check
                key={key}
                id={user.idUser}
                name={user.name}
                value={user.id}
                type="checkbox"
                label={user.name}
                onChange={handleChange}
              />
            ))}

          <Row>
            <Form.Group>
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
              <Button
                variant="outline-danger"
                className="m-3"
                onClick={() => history.goBack()}
              >
                Cancel
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </Card>
      <Toast />
    </Container>
  );
};
