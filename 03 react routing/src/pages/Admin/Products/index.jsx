import {  Table,  } from "antd";
import { useEffect, useState } from "react";
import controller from "../../../services";
import { endpoints } from "../../../services/constants";
import React from 'react'

const columns = [
 
  {
    title: "Photo",
    dataIndex: "thumbnail",
    render: (text, record) => {
      
      return <img src={text} alt={record.title} width={100} />;
    },
  },
  {
    title: "Title",
    dataIndex: "title",
    showSorterTooltip: {
      target: "full-header",
    },
    sorter: (a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
  },
  {
    title: "Brand",
    dataIndex: "brand",
    defaultSortOrder: "descend",
    sorter: (a, b) =>
      a.brand.toLowerCase().localeCompare(b.brand.toLowerCase()),
  },
  
  
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    controller.getAllData(endpoints.products).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div id="admin-products">
      <div className="container">
        <div className="admin-products">
          <Table
            columns={columns}
            dataSource={products}
            onChange={onChange}
            showSorterTooltip={{
              target: "sorter-icon",
            }}
            rowKey={"id"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;