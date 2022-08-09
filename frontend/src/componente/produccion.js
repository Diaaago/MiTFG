import React, { Component } from 'react';
export default class produccion extends Component {
    constructor(props){
        super(props);
        this.state = {
          datosProducion: []
        }
    }
    componentDidMount() { this.readText() }

    readText() {
        fetch('./nodo1.csv').then(response => response.text()).then(responseText => {
            this.setState({
                datosProducion: responseText
            })
        })
    }


    render() {
        return (
        <div>{this.state.datosProducion}</div>
        )
    }
}
