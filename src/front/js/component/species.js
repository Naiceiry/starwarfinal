import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import perfil from "../../img/perfil.jpg";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
// import { Heart, HeartFill } from "react-bootstrap-icons";

export const Species = (props) => {
  const { store, actions } = useContext(Context);

  const isIncluded = store.favourites.find(
    (item) => item.uid === props.uid && item.kind === props.kind
  );

  return (
    <div className="card">
      <img src={perfil} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 value={props.name} className="card-title">
          {props.name}
        </h5>
        <a href={props.url} className="card-text">
          {props.url}
        </a>
        <div className="botones">
          <Link className="bl" to="/detalles">
            <span
              className="btn btn-primary btn-lg"
              href="#"
              role="button"
              onClick={() => actions.setDetalles(props.url)}
            >
              Learn More!
            </span>
          </Link>
          {isIncluded && <HeartFill />}
          {!isIncluded && (
            <Heart
              onClick={(e) => {
                actions.addFavourite({
                  name: props.name,
                  uid: props.uid,
                  kind: props.kind,
                  url: props.url,
                });
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
Species.propTypes = {
  uid: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  kind: PropTypes.string,
};
