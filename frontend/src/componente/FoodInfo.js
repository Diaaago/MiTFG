import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Valoracion from './rate';

function FoodInfo() {
  const [productos, setProductos] = useState([]);
  const [rate, setRate] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getfood = async (id) => {
    const response = await axios.get(`http://localhost:4000/products/${id}`);
    setProductos(response.data);
    setLoading(false);
  };
  
  const getrate = async (id) => {
    const response = await axios.get(`http://localhost:4000/rate-products/${id}`);
    setRate(response.data);
  };
  
  useEffect(() => {
    getfood(id);
    getrate(id);
  }, [id]);

  const handleFallbackImage = (e) => {
    e.target.src = 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-be3500.jpg';
  };
  const product = productos;
  const imgURL = !loading && product && product.image_url ? product.image_url : 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-be3500.jpg';
  const tabList = [
    {
      key: 'tab1',
      tab: 'Información del producto',
    },
    {
      key: 'tab2',
      tab: 'Información nutricional (100 g / 100 ml)',
    },
    {
      key: 'tab3',
      tab: 'Valoraciones',
    },
  ];

  const contentList = {
    tab1: <div>
      <p>Nombre: {product.product_name ? product.product_name : "?"}</p>
      <p>Marca: {product.brand ? product.brand : "?"}</p>
      <p>Pais de origen: {product.countries_en ? product.countries_en : "?"}</p>
      <p>Ingredientes: {product.ingretients_text ? product.ingretients_text : "?"}</p>
      <p>Categorias: {product.categories ? product.categories : "?"}</p>
    </div>,

    tab2: <div>
      <p>Energía: {product.energy_100g ? product.energy_100g : "?"} Kj</p>
      <p>Grasas: {product.fat_100g ? product.fat_100g : "?"} g</p>
      <p>Hidratos de carbono: {product.carbohydrates_100g ? product.carbohydrates_100g : "?"} g</p>
      <p>Azúcares: {product.sugars_100g ? product.sugars_100g : "?"} g</p>
      <p>Fibra alimentaria: {product.fiber_100g ? product.fiber_100g : "?"} g</p>
      <p>Proteínas: {product.proteins_100g ? product.proteins_100g : "?"} g</p>
      <p>Sal: {product.salt_100g ? product.salt_100g : "?"} g</p>
      <p>Sodio: {product.sodium_100g ? product.sodium_100g : "?"} g</p>
    </div>,

    tab3: <Valoracion rate={rate}></Valoracion>,
  };

  const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };



  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <img style={{ width: '200px' }} src={imgURL} />
        </div>

        <Card
          style={{
            width: '100%',
            marginLeft: '20px',
          }}
          title=""
          hoverable
          tabList={tabList}
          activeTabKey={activeTabKey1}
          onTabChange={onTab1Change}
        >
          {contentList[activeTabKey1]}
        </Card>
      </div>
    </>
  );
}

export default FoodInfo;