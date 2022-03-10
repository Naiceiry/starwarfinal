import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import perfil from "../../img/perfil.jpg";
import PropTypes from "prop-types";
import "../../styles/home.scss";
export const Peoplepages = (props) => {
  const { store, actions } = useContext(Context);

  const listproperties = store.properties.map((item, index) => {
    return (
      <div key={index}>
        <p>
          {item[0]}
          {item[1]}
        </p>
      </div>
    );
  });
  return (
    <div className="grand mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img className="imgperfil" src={perfil} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{listproperties[9]}</h1>
            <h1 className="card-text">{listproperties[10]}</h1>
            <h3>{listproperties}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
Peoplepages.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  properties: PropTypes.array,
};
