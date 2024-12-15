import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css'

const Card = (props) => {
  return (<>
  
  
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.src} alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.desc}
          </p>
          <h6>Price : <span style={{color: "red"}}>{props.price} AZN</span></h6>
        </div>
      </div>
   
    </>
  );
};

export default Card;
