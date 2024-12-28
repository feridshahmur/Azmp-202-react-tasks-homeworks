import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavoritesContext } from "../../../context/WishlistProvider/index";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import controller from "../../../services";

const Product = () => {
  const { toggleFavorites, favorites } = useContext(FavoritesContext);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) =>
    p.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.trim());
  };

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const res = await controller.getAllData();
      setProducts(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div style={{ marginTop: "4rem" }}>
            <form>
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Search Product"
                  onChange={handleSearch}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        {filteredProducts &&
          filteredProducts.map((p) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={p.id}>
                <div
                  className="card"
                  style={{ width: "18rem", margin: "4rem", height: "680px" }}
                >
                  <img
                    src={p.image}
                    className="card-img-top"
                    alt="..."
                    style={{ objectFit: "contain", padding: "0" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.title.slice(0, 80)}</h5>
                    <p className="card-text">{p.description.slice(0, 80)}</p>
                  </div>
                  <NavLink to={`${p.id}`}>
                    <button className="btn btn-primary">Detail</button>
                  </NavLink>
                  <button
                    onClick={() => toggleFavorites(p)} // Use p instead of c
                    className="btn btn-danger"
                  >
                    {favorites.find((q) => q.id === p.id) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
