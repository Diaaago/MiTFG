import React, { useState, useEffect } from 'react';
import upmEtsisiLogo from '../fotos/upmEtsisiLogo.jpg';
import { AreaChartOutlined, PictureOutlined, SearchOutlined } from '@ant-design/icons';
import { Layout, Menu, Input } from 'antd';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

const { Header } = Layout;
const { Search } = Input;


const items = [
    {
        key: '/menu',
        icon: <PictureOutlined />,
        label: <b>Menu</b>,
    },
/*     {
        key: '/Buscar',
        icon: <SearchOutlined />,
        label: <b>Buscar</b>,
    }, */
    {
        label: <b>Grafica</b>,
        key: '/grafica',
        icon: <AreaChartOutlined />,
        children: [
            /* {
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
            }, */
            {
                label: 'Humedad',
                key: '/grafica/humedad',
            },
            {
                label: 'Temperatura',
                key: '/grafica/temperatura',
            },
            {
              label: 'ECo2',
              key: '/grafica/eco2',
            },
            {
              label: 'TVOC',
              key: '/grafica/tvoc',
            },

        ],
    },
]

export default function TopHeader() {

    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState(location.pathname);

    useEffect(() => {
        setSelectedKey(location.pathname);
      }, [location]);

  const handleClick = (e) => {
    navigate(e.key);
  };

const onSearch = (value) => {
  navigate(`/foodInfo/${value}`);
};

  const renderMenu = (menuList) => {
    return menuList.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {renderMenu(item.children)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        );
      }
    });
  };

    return (
        <Header>

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

            {< div style={{ float: 'right', marginRight: 20, color: "#F8F8FF" }}>
            <Search
                placeholder="Introduce algo....."
                allowClear
                enterButton="Buscar"
                size="large"
                onSearch={onSearch}
                style={{
                    margin: '12px',
                }}
            />
        </div>}
<Menu
    theme="dark"
    mode="horizontal"
    selectedKeys={[selectedKey]}
    items={items}
    onClick={handleClick}
>
    {renderMenu(items)}
</Menu>
        </Header >)

}

