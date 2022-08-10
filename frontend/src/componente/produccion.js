import React, { Component } from 'react';
import * as d3 from "d3";

export default class produccion extends Component {
    constructor(props){
        super(props);
        this.state = {
          eco2: []
        }
    }
    componentDidMount() { 
        //this.readText() 
        d3.csv('./nodo1.csv', function(csvdata){
            for(let i = 0; i < 5; i++) {
                console.log('eco2', csvdata[i].eco2)
                
                /*let eco2 = csvdata[i].eco2;
                let humedad = csvdata[i].humedad;
                let temperatura = csvdata[i].temperatura;
                let tvoc = csvdata[i].tvoc;*/
            }
        
        })
        console.log('this', this)
    }

    /*readText() {
        fetch('./nodo1.csv').then(response => response.text()).then(responseText => {
            this.setState({
                datosProducion: responseText
            })
        })
    }*/


    render() {
        return (
        <div></div>
        )
    }
}
