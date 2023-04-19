import React, { useState } from 'react';
import { Form, Select, Button, Card } from 'antd';
import './Filtro.css';

const FilterForm = ({ onFilterSubmit }) => {
  const [form] = Form.useForm();
  const [categories, setCategories] = useState('');
  const [brand, setBrand] = useState('');
  const [countries, setCountries] = useState('');

  const handleSubmit = () => {
    onFilterSubmit({ categories, brand, countries });
  };

  return (
    <Card title="筛选器" bordered={true} className="filter-form-card">
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item label="Categorías" name="categories" className="form-item">
          <Select
            className="select"
            style={{ width: 200 }}
            placeholder="选择分类"
            onChange={(value) => setCategories(value)}
          >
            {/* 在这里添加分类选项 */}
            <Select.Option value="category1">分类1</Select.Option>
            <Select.Option value="category2">分类2</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Marca" name="brand" className="form-item">
          <Select
            className="select"
            style={{ width: 200 }}
            placeholder="选择品牌"
            onChange={(value) => setBrand(value)}
          >
            {/* 在这里添加品牌选项 */}
            <Select.Option value="brand1">品牌1</Select.Option>
            <Select.Option value="brand2">品牌2</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Paises de venta" name="countries" className="form-item">
          <Select
            className="select"
            style={{ width: 200 }}
            placeholder="选择销售国家"
            onChange={(value) => setCountries(value)}
            allowClear
          >
            {/* 在这里添加国家选项 */}
            <Select.Option value="country1">国家1</Select.Option>
            <Select.Option value="country2">国家2</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item className="form-item">
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FilterForm;