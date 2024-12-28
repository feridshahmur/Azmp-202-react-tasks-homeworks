import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import controller from "../../../services";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const detail = async () => {
    try {
      const detailData = await controller.getDataById(id);
      console.log(id);
      setProduct(detailData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    detail();
  }, [id]);

  return (
    <div>
      <div className="container">
        <div className="row">
          {product && (
            <div className="col-12 col-md-6 col-lg-4" key={product.id}>
              <div
                className="card"
                style={{ width: "18rem", margin: "4rem", height: "1280px" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="..."
                  style={{ objectFit: "contain", padding: "0" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title.slice(0, 80)}</h5>
                  <p className="card-text">{product.description}</p>
                  <a href="#" className="btn btn-primary">
                    Details
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
