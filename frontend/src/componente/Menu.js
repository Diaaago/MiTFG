import React, { useState, useEffect } from 'react';
import { Row, Col, Skeleton, Pagination } from 'antd';
import axios from 'axios';
import Products from './Products';
import Filtro from './Filtro';

const Menu = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchData = async (page, limit) => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:4000/products?page=${page}&limit=${limit}`);
            setTimeout(() => {
                setProductos(response.data);
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(currentPage, 12);
    }, [currentPage]);

    const handleMouseEnter = (id) => {
        setHoveredCard(id);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    paddingTop: '20px',
                }}
            >
                <Skeleton active paragraph={{ rows: 6 }} />
                <Skeleton active paragraph={{ rows: 6 }} />
                <Skeleton active paragraph={{ rows: 6 }} />
            </div>
        );
    }

    return (
        <>
            <Row>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <div style={{ marginRight: '20px' }}>
                        <Filtro />
                    </div>
                </Col>
                <Products productos={productos.data} />
            </Row>


            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ textAlign: 'center', marginTop: '20px', marginLeft: '12%' }}>
                    <Pagination
                        current={currentPage}
                        onChange={(page) => setCurrentPage(page)}
                        total={productos.totalCount}
                        showSizeChanger={false}
                        defaultPageSize={12}
                    />
                </Col>
            </Row>



        </>
    );
};

export default Menu;