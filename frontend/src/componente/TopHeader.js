import React, { useState } from 'react'
import upmEtsisiLogo from '../fotos/upmEtsisiLogo.jpg'

import {
    AreaChartOutlined,
    PictureOutlined,
    SearchOutlined,
} from '@ant-design/icons';

import { Layout, Menu } from 'antd';
const { Header } = Layout;

const items = [
    {
        key: '1',
        icon: <PictureOutlined />,
        label: <b>Menu</b>,
    },
    {
        key: '2',
        icon: <SearchOutlined />,
        label: <b>Buscar</b>,
    },
    {
        label: <b>Grafica</b>,
        key: '3',
        icon: <AreaChartOutlined />,
        children: [
            {
                type: 'group',
                label: '图图',
                children: [
                    {
                        label: 'Humedad',
                        key: 'setting:1',
                    },
                    {
                        label: 'Temperatura',
                        key: 'setting:2',
                    },
                ],
            },

        ],
    },
]

export default function TopHeader() {

    const renderMenu = (menuList) => {
        return menuList.map(item =>{
            if (item.children){
                return <Menu></Menu>
            }
        })
    }
    return (
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>

            <img src={upmEtsisiLogo}
                alt={'upmEtsisiLogo'}
                title={'upmEtsisiLogo'}
                style={{
                    float: 'left',
                    width: 174,
                    height: 60,
                    margin: '2px 3px 0px -46px',
                    background: 'rgba(255, 255, 255, 0.2)',
                }} />

            <div style={{ float: 'right', marginRight: 20, color: "#F8F8FF" }}>
                <span>
                    <b>Bienvenida!</b>
                </span>
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <PictureOutlined />,
                        label: <b>Menu</b>,
                    },
                    {
                        key: '2',
                        icon: <SearchOutlined />,
                        label: <b>Buscar</b>,
                    },
                    {
                        label: <b>Grafica</b>,
                        key: '3',
                        icon: <AreaChartOutlined />,
                        children: [
                            {
                                type: 'group',
                                label: '图图',
                                children: [
                                    {
                                        key: 'setting:1', 
                                        label: 'Humedad',

                                    },
                                    {
                                        key: 'setting:2', 
                                        label: 'Temperatura',

                                    },
                                ],
                            },

                        ],
                    },
                ]}
            >
                {/* {renderMenu(menuList)} */}
            </Menu>
        </Header>)

}