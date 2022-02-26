import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Male from "../images/male.png";
import Female from "../images/female.png";

const UserDetails = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Card.Img
          src={product.gender === "male" ? Male : Female}
          variant="top"
        />
        <Card.Body>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="div">
            <strong>{product.email}</strong>
          </Card.Text>
          <Card.Text as="div">
            {product.gender.toUpperCase() === "MALE" ? (
              <i className="fa-solid fa-mars"></i>
            ) : (
              <i className="fa-solid fa-mars-and-venus"></i>
            )}
            <strong>{product.gender.toUpperCase()}</strong>
          </Card.Text>
          <i
            className="fa-solid fa-circle"
            style={
              product.status.toUpperCase() === "ACTIVE"
                ? { color: "green" }
                : { color: "red" }
            }
          ></i>
          <span>{product.status.toUpperCase()}</span>
          <Link to={`/${product._id}`}>
            <Button variant="outline-secondary">
              <i className="fa-solid fa-pen-to-square"></i>
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserDetails;
