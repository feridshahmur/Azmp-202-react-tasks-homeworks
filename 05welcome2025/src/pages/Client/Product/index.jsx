import React, { useEffect, useState } from "react";
import controller from "../../../Services/index";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss"; // SCSS faylı əlavə edildi

const Products = () => {
  const [products, setProducts] = useState([]);

  const prdcts = async () => {
    try {
      const productsData = await controller.getAllData();
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    prdcts();
  }, []);

  return (
    <div>
      <h1>OUR PRODUCTS</h1>
      <div className={`container ${styles.container}`}>
        <div className={`row ${styles.row}`}>
          {products &&
            products.map((p) => {
              return (
                <div key={p.id} className={`col-12 col-md-6 col-lg-4`}>
                  <div className={`card ${styles.card}`}>
                    <img
                      src={p.image}
                      className={`card-img-top ${styles.cardImgTop}`}
                      alt={p.title}
                    />
                    <div className={`card-body ${styles.cardBody}`}>
                      <h5 className={`card-title ${styles.cardTitle}`}>
                        {p.title}
                      </h5>
                      <p className={`card-text ${styles.cardText}`}>
                        {p.description}
                      </p>
                      <button className="btn btn-outline-primary">
                        About this product
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
