import React, { Component, useState } from 'react'
import axios from 'axios'
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
    console.log('data', this)
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
    //const vot = JSON.stringify(this.state.productos.map(food => food.vot));
    //const result = vot.split(',');
    const imgURL = this.state.productos.map(food => food.img);
    return (
      <>
        <div>
          <form onSubmit={this.buscar}>
            <input type="text" onChange={this.obtenerId}/>
            <button type="submit">buscar</button>
          </form>
        </div>
          <img src = {imgURL}/>
          <div>nombre del producto: {this.state.productos.map(food => food.product_name)}</div>
          <div>marca: {this.state.productos.map(food => food.brand)}</div>
          <div>etiquetas: {this.state.productos.map(food => food.etiquetas)}</div>
          <div>paises de venta: {this.state.productos.map(food => food.country)}</div>
      </>
    )
  }
}
