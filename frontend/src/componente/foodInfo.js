import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Menu from './menu';
import { useParams } from 'react-router-dom';

function Food() {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getfood(id);
  }, [id]);

  const getfood = async (id) => {
    await axios.get(`http://localhost:4000/food/${id}`).then(response => {
      setProductos(response.data);
    })
  }

  const product = productos[0];
  const imgURL = product ? product.img : '';

  return (
    <>
      <Menu></Menu>
      <Container>
        <Row className="mt-2">
          <Col><img src={imgURL} className="rounded mx-auto d-block" alt="" /></Col>
          <Col>
            <Row className="mb-2"><p>Codigo de barra: {product ? product.id : ''}</p></Row>
            <Row className="mb-2"><p>Nombre: {product ? product.product_name : ''}</p></Row>
            <Row className="mb-2"><p>Categorías: {product ? product.categories : ''}</p></Row>
            <Row className="mb-2"><p>Marca: {product ? product.brand : ''}</p></Row>
            <Row className="mb-2"><p>Paises de venta: {product ? product.country : ''}</p></Row>
            <Row className="mb-2"><p>manufacturing: {product ? product.manufacturing : ''}%</p></Row>
            <Row className="mb-2"><p>packaging: {product ? product.packaging : ''}%</p></Row>
            <Row className="mb-2"><p>palmoil: {product ? product.palmoil : ''}%</p></Row>
            <Row className="mb-2"><p>storage: {product ? product.storage : ''}%</p></Row>
            <Row className="mb-2"><p>transport: {product ? product.transport : ''}%</p></Row>
            <Row className="mb-2"><p>size: {product ? product.size : ''}%</p></Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Food;
