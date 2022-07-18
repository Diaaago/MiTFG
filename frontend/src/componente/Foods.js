import React, { Component } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Foods extends Component {
  constructor(props){
      super(props);
      this.state = {
        productos : [],
        id: ''
      }
  }
  
  async componentDidMount() {
    /*await axios.get('http://localhost:4000/food').then(response => {
      this.setState({productos: response.data});
    })*/

    //this.getfood(this.state.id);
    
  }
  getfood = async (id) => {
    await axios.get('http://localhost:4000/food/' + id ).then(response => {
    this.setState({productos: response.data})
    })
    
  }

  obtenerId = (e) => {
    this.setState({
      id : e.target.value
    })
  }

  buscar = async (e) => {
    e.preventDefault ();
    this.getfood(this.state.id);
  }

  render() {
    const imgURL = this.state.productos.map(food => food.img);
    return (
      <>
      <Nav className="mt-2">
        <NavDropdown title="Menu" id="nav-dropdown">
            <NavDropdown.Item href="list">Lista de productos</NavDropdown.Item>
        </NavDropdown>
        
        <Form onSubmit={this.buscar}>
          <Row className="align-items-center">
            <Col xs="auto">
              <InputGroup className="mb-2">
                <Form.Control id="inlineFormInputGroup"  onChange={this.obtenerId} placeholder="Codigo de Barra" />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2">
                Buscar
              </Button>
            </Col>
          </Row>
        </Form>
      </Nav>
      <Container>
        <Row className="mt-2">
          <Col><img src= {imgURL} class="rounded mx-auto d-block" alt=""/></Col>
          <Col>
            <Row className="mb-2">{this.state.productos.map(food => <p>Codigo de barra: {food.id}</p>)}</Row>  
            <Row className="mb-2">{this.state.productos.map(food => <p>Nombre: {food.product_name}</p>)}</Row>
            <Row className="mb-2">{this.state.productos.map(food => <p>Categorías: {food.categories}</p>)}</Row>
            <Row className="mb-2">{this.state.productos.map(food => <p>Marca: {food.brand}</p>)}</Row>
            <Row className="mb-2">{this.state.productos.map(food => <p>Paises de venta: {food.country}</p>)}</Row>
            <Row className="mb-2">{this.state.productos.map(food => <p>manufacturing: {food.manufacturing}%</p>)}</Row>
            <Row className="mb-2">{this.state.productos.map(food => <p>packaging: {food.packaging}%</p>)}</Row>
            <Row className="mb-2">{this.state.productos.map(food => <p>palmoil: {food.palmoil}%</p>)}</Row>
            <Row className="mb-2">{this.state.productos.map(food => <p>storage: {food.storage}%</p>)}</Row>
            <Row className="mb-2">{this.state.productos.map(food => <p>transport: {food.transport}%</p>)}</Row>
            <Row className="mb-2">{this.state.productos.map(food => <p>size: {food.size}%</p>)}</Row>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
}
