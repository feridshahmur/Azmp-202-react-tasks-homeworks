import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const AddProduct = () => {
  const initialValues = {
    image: '', 
    title: '',
    brand: '',
    description: '',
    price: '',
  };

  const validationSchema = Yup.object({
    image: Yup.string()
      .url('Invalid URL')
      .required('Image URL is required'),
    title: Yup.string().required('Title is required'),
    brand: Yup.string().required('Brand is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number()
      .required('Price is required')
      .positive('Price must be a positive number'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post('http://localhost:8080/products', values);
      alert('Product added successfully');
      resetForm();
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  return (


    <>
     <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    
     <div className="container mt-5">
      <h1>Add Product</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image URL
              </label>
              <Field type="text" id="image" name="image" className="form-control" />
              <ErrorMessage name="image" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <Field type="text" id="title" name="title" className="form-control" />
              <ErrorMessage name="title" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="brand" className="form-label">
                Brand
              </label>
              <Field type="text" id="brand" name="brand" className="form-control" />
              <ErrorMessage name="brand" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                className="form-control"
              />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <Field type="number" id="price" name="price" className="form-control" />
              <ErrorMessage name="price" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </>
   
  );
};

export default AddProduct;
