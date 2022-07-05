import React, { Component, useState } from 'react'
import axios from 'axios'
export default class Foods extends Component {
  constructor(props){
      super(props);
      this.state = {
        productos : []
        
      }
  }
  
  async componentDidMount() {
    await axios.get('http://localhost:4000/food').then(response => {
      this.setState({productos: response.data});
    })

    //const producto = await axios.get('http://localhost:4000/food/8410368032056');
    //console.log('productos',this.state.productos);

  }

  render() {
    //const vot = JSON.stringify(this.state.productos.map(food => food.vot));
    //const result = vot.split(',');
    const imgURL = this.state.productos.map(food => food.img);
    return (
      <>
      <div></div>
        <img src = {imgURL}/>
        <div>url: {this.state.productos.map(food => food.img)}</div>
        <div>nombre del producto: {this.state.productos.map(food => food.product_name)}</div>
        <div>marca: {this.state.productos.map(food => food.brand)}</div>
        <div>etiquetas: {this.state.productos.map(food => food.etiquetas)}</div>
        <div>paises de venta: {this.state.productos.map(food => food.country)}</div>
      </>
    )
  }
}
