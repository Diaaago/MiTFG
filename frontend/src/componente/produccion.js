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
        d3.csv('./nodo1.csv', function(error, csvdata){
            if(error){
                console.log('error', error);
            }
            console.log('data', csvdata)
            for(var i = 0; i < csvdata.length; i++) {
                var eco2 = csvdata[i].eco2;
                console.log('eco2', eco2)
                var humedad = csvdata[i].humedad;
                console.log('humedad', humedad)
                var temperatura = csvdata[i].temperatura;
                console.log('temp', temperatura)
                var tvoc = csvdata[i].tvoc;
                console.log('tvoc', tvoc)
            }
           
        })
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
