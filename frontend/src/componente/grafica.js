import React, { Component } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Menu from './menu';

export default class produccion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        // Leer el archivo CSV
        fetch('./1.csv')
            .then(response => response.text())
            .then(csv => {
                // Parsear el CSV
                const rows = csv.split('\n');
                const labels = [];
                const values = [];
                const title = rows[0].split(',')[7]
                rows.slice(1).forEach(row => {
                    const columns = row.split(',');
                    const timestamp = columns[2];
                    const date = new Date(parseInt(timestamp));
                    const day = date.getDate();
                    const month = date.getMonth() + 1; // Los meses en JavaScript empiezan en 0
                    const year = date.getFullYear();
                    const hour = date.getHours();
                    const minutes = date.getMinutes();
                    const formattedDate = `${day}/${month}/${year} ${hour}:${minutes}`;
                    labels.push(formattedDate);
                    values.push(parseInt(columns[7]));
                });
                // Crear los datos de la gráfica
                const data = {
                    labels: labels,
                    datasets: [
                        {
                            label: title,
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 1,
                            data: values
                        }
                    ]
                };
                // Actualizar el estado con los datos de la gráfica
                this.setState({ data: data });
            });
    }

    render() {
        return (
            <>
                <Menu></Menu>
                <div>
                    {this.state.data?.labels && (
                        <Line
                            data={this.state.data}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Gráfica de datos',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                    )}
                </div>
            </>
        );
    }
}
