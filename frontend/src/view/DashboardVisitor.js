import './DashboardVisitor.css'

import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import TopHeader from '../componente/TopHeader'

import { Layout, Breadcrumb, theme } from 'antd'
import { HomeOutlined } from '@ant-design/icons';

import RedirectOnce from '../router/RedirectOnce';
import GraficaHumedad from '../componente/grafica/GraficaHumedad'
import GraficaTemp from '../componente/grafica/GraficaTemp'
import Menu from '../componente/Menu'

const { Content, Footer } = Layout;

export default function DashboardVisitor(props) {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <BrowserRouter>
        <Layout>

            <TopHeader />

            <Layout>

                <Content style={{ padding: /* '0 50px' */24, minHeight: 380, background: colorBgContainer }}>

                    {/*                     <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>啊吧啊吧</Breadcrumb.Item>
                        <Breadcrumb.Item>啊吧啊吧</Breadcrumb.Item>
                    </Breadcrumb> */}

                                       {/*  <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>Content</div> */}
                    
                    <Routes>

                        {/* <Route path="/" element={<RedirectOnce />} /> */}
                        <Route path="/" element={<Navigate to="/menu" />} />
                        <Route path="/menu" element={<Menu/>} />
                        <Route path="/grafica/humedad" element={<GraficaHumedad/>} />
                        <Route path="/grafica/temperatura" element={<GraficaTemp/>} />
                        <Route path="/grafica" element={<Navigate to="/grafica/humedad" />} />
                        

                    </Routes>
                    
                    
                </Content>

            </Layout>

            <Footer style={{ textAlign: 'center' }}>TFG UPM ETSISI 2022 - 2023</Footer>

        </Layout>
        </BrowserRouter>
    )
}
