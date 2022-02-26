import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import UserDetails from "./UserDetails";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  const productCall = async () => {
    const { data } = await axios.get(`/api`);
    setProducts(data);
  };

  useEffect(() => {
    productCall();
  }, []);

  return (
    <>
      <Row>
        {products.map((items) => (
          <Col key={items._id} className="container" md="3">
            <UserDetails product={items} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
