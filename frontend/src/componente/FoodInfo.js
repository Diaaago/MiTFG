import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FoodInfo() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getfood(id);
  }, [id]);

  const getfood = async (id) => {
    await axios.get(`http://localhost:4000/food/${id}`).then(response => {
      setProductos(response.data);
      setLoading(false);
    });
  };

  const handleFallbackImage = (e) => {
    e.target.src = 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-be3500.jpg';
  };

  const product = productos[0];
  const imgURL = !loading && product && product.img ? product.img : '';

  return (
    <>
      <Container>
        <Row className="mt-2">
          <Col>
            {!loading && (
              <img
                src={imgURL}
                onError={handleFallbackImage}
                className="rounded mx-auto d-block"
                alt=""
              />
            )}
          </Col>
          <Col>
            {product && (
              <>
                <Row className="mb-2"><p>Codigo de barra: {product.id}</p></Row>
                <Row className="mb-2"><p>Nombre: {product.product_name}</p></Row>
                <Row className="mb-2"><p>Categorías: {product.categories}</p></Row>
                <Row className="mb-2"><p>Marca: {product.brand}</p></Row>
                <Row className="mb-2"><p>Paises de venta: {product.country}</p></Row>
                <Row className="mb-2"><p>manufacturing: {product.manufacturing}%</p></Row>
                <Row className="mb-2"><p>packaging: {product.packaging}%</p></Row>
                <Row className="mb-2"><p>palmoil: {product.palmoil}%</p></Row>
                <Row className="mb-2"><p>storage: {product.storage}%</p></Row>
                <Row className="mb-2"><p>transport: {product.transport}%</p></Row>
                <Row className="mb-2"><p>size: {product.size}%</p></Row>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FoodInfo;