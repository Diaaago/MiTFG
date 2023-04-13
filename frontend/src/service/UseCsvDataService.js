import { useState, useEffect } from 'react';

const useCsvData = props => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('../../../1.csv')
            .then(response => response.text())
            .then(csv => {
                const rows = csv.split('\n');
                const labels = [];
                const valuesHumedad = [];
                const valuesTemperatura = [];

                rows.slice(1).forEach(row => {
                    const columns = row.split(',');
                    const timestamp = columns[2];
                    const date = new Date(parseInt(timestamp));
                    const day = date.getDate();
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();
                    const hour = date.getHours();
                    const minutes = date.getMinutes();
                    const formattedDate = `${day}/${month}/${year} ${hour}:${minutes}`;
                    labels.push(formattedDate);
                    valuesHumedad.push(parseInt(columns[7]));
                    valuesTemperatura.push(parseInt(columns[8]));
                });

                setData({ labels, valuesHumedad, valuesTemperatura });
            });
    }, []);

    return data;
}

export default useCsvData;