import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FoodInfo() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getfood(id);
  }, [id]);

  const getfood = async (id) => {
    await axios.get(`http://localhost:4000/products/${id}`).then(response => {
      setProductos(response.data);
      setLoading(false);
    });
  };

  const handleFallbackImage = (e) => {
    e.target.src = 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-be3500.jpg';
  };
  const product = productos;
  const imgURL = !loading && product && product.image_url ? product.image_url : 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-be3500.jpg';
  const tabList = [
    {
      key: 'tab1',
      tab: 'Informacion del producto',
    },
    {
      key: 'tab2',
      tab: 'Informacion nutricional',
    },
  ];

  const contentList = {
    tab1: <div>
      <p>Nombre: {product.product_name}</p>
      <p>Marca: {product.brand}</p>
      <p>Pais de origen: {product.countries_en}</p>
      <p>Ingredientes: {product.ingretients_text}</p>
      <p>Categorias: {product.categories}</p>
    </div>,

    tab2: <div>
      <p>Energía: {product.energy_100g}</p>
      <p>Grasas: {product.fat_100g}</p>
      <p>Hidratos de carbono: {product.carbohydrates_100g}</p>
      <p>Azúcares: {product.sugars_100g}</p>
      <p>Fibra alimentaria: {product.fiber_100g}</p>
      <p>Proteínas: {product.proteins_100g}</p>
      <p>Sal: {product.salt_100g}</p>
      <p>Sodio: {product.sodium_100g}</p>
    </div>,
  };

  const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };



  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img style={{ width: '200px' }} src={imgURL} />
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