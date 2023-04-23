import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Skeleton, Pagination } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        fetchData(currentPage, 18);
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
                <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                    <Row gutter={[16, 16]}>
                        {productos.map((p) => (
                            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                                <Link to={`/foodInfo/${p.id}`}
                                    style={{
                                        textDecoration: 'none', // 添加此行以覆盖默认的下划线样式
                                    }}>
                                    <Card
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderWidth: '5px',
                                            borderColor: hoveredCard === p._id ? '#001529' : '#91d5ff',
                                            borderStyle: 'solid',
                                        }}
                                        onMouseEnter={() => handleMouseEnter(p._id)}
                                        onMouseLeave={handleMouseLeave}
                                        cover={
                                            <div
                                                style={{
                                                    height: '160px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    paddingTop: '20px',
                                                }}
                                            >
                                                {p.image_url ? (
                                                    <img
                                                        alt="example"
                                                        src={p.image_url}
                                                        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                                                    />
                                                ) : (
                                                    <img
                                                        alt="example"
                                                        src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-be3500.jpg"
                                                        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                                                    />
                                                )}
                                            </div>
                                        }
                                    >
                                        <Card.Meta
                                                title={
                                                    p.product_name ? (
                                                        p.product_name
                                                    ) : (
                                                        <span style={{ fontWeight: 'bold', color: 'red' }}>¡Nombre No Disponible!</span>
                                                    )
                                                }
                                            style={{ textAlign: 'center', color: '#F0F2F5' }}
                                        />
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col
                            xs={{ span: 24 }}
                            sm={{ span: 24 }}
                            md={{ span: 24 }}
                            lg={{ span: 24 }}
                            xl={{ span: 24 }}
                            style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
                        >
                            <Pagination
                                current={currentPage}
                                onChange={(page) => setCurrentPage(page)}
                                total={500} // 这里需要替换为从服务器获取的产品总数
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Menu;