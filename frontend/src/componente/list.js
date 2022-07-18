import React, { Component } from 'react'
const axios = require('axios');
export default class list extends Component {
  constructor(props){
    super(props);
    this.state = {
      productos : [],
      id: ''
    }
  }

  async componentDidMount() {
    await axios.get('http://localhost:4000/food').then(response => {
      this.setState({productos: response.data});
    })

    this.getfood(this.state.id);
    
  }
  render() {
    return (
      <div>list</div>
    )
  }
}
