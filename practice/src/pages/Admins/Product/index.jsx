import React, { useState, useEffect } from 'react';
import { Button, Space, Table, Popconfirm, message } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const ProductTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (record) => {
    setEditingProduct(record);
    setModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/products/${id}`);
      setData(data.filter((item) => item.id !== id));
      message.success('Product deleted successfully');
    } catch (error) {
      console.error('Failed to delete product:', error);
      message.error('Failed to delete product');
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/products/${editingProduct.id}`, editingProduct);
      setData((prevData) =>
        prevData.map((item) => (item.id === editingProduct.id ? editingProduct : item))
      );
      message.success('Product updated successfully');
      setModalVisible(false);
    } catch (error) {
      console.error('Failed to update product:', error);
      message.error('Failed to update product');
    }
  };

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img src={text} alt="Product" style={{ width: 200, height: 200 }} />,
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.length - b.title.length,
      ellipsis: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      ellipsis: true,
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
      sorter: (a, b) => a.brand.length - b.brand.length,
      ellipsis: true,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="container">
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey="id"
        onChange={handleChange}
      />
      
      <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editingProduct?.title || ''}
                onChange={(e) =>
                  setEditingProduct({ ...editingProduct, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={editingProduct?.price || ''}
                onChange={(e) =>
                  setEditingProduct({ ...editingProduct, price: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                value={editingProduct?.brand || ''}
                onChange={(e) =>
                  setEditingProduct({ ...editingProduct, brand: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalVisible(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductTable;
