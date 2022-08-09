import React, { Component } from 'react'
const axios = require('axios');
export default class list extends Component {
  constructor(props){
    super(props);
    this.state = {
      productos: []
    }
  }

  async componentDidMount() {
    await axios.get('http://localhost:4000/food').then(response => {
      this.setState({
        productos: response.data
      })
    })
  }


  render() {
    return (
      <>
        <div>{this.state.productos.map(p => p.product_name)}</div>
      </>
      
    )
  }
}
