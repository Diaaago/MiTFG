import './DashboardVisitor.css'

import React from 'react'

import TopHeader from '../componente/TopHeader.js'

import { Layout, Breadcrumb, theme } from 'antd'
import { HomeOutlined } from '@ant-design/icons';

const { Content, Footer } = Layout;

export default function DashboardVisitor() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>

            <TopHeader />

            <Layout>

                <Content style={{ padding: '0 50px' }}>

                    <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>啊吧啊吧</Breadcrumb.Item>
                        <Breadcrumb.Item>啊吧啊吧</Breadcrumb.Item>
                    </Breadcrumb>

                    <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>Content</div>

                </Content>

            </Layout>

            <Footer style={{ textAlign: 'center' }}>TFG UPM ETSISI 2022 - 2023</Footer>

        </Layout>
    )
}
