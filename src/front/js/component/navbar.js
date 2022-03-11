import React, { useContext, useEffect } from "react";
import PropTypes, { object } from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../img/starward.jpg";
import "../../styles/home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import { BsXCircle } from "react-icons/bs";
export const Navbar = (props) => {
  const { store, actions } = useContext(Context);

  const listFavourites = store.favourites.map((item, i) => {
    // let urlArr = item.url.split("/");
    // let element = item.uid;
    // let category = urlArr[urlArr.length - 2];

    return (
      <li key={i} id="myLiList">
        <a>
          {item.name}

          <BsXCircle
            onClick={() => {
              console.log("clikado");
              actions.deletfavourite(item.url);
            }}
          />
        </a>
      </li>
    );
  });

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light  d-flex justify-content-between"
      id="myNav"
    >
      <div className="row collapse navbar-collapse">
        <div className="col-6">
          <Link to="/">
            <img id="logo" src={logo} />
          </Link>
        </div>
        <div className="col-6  dropdown-menu-right">
          <div className="mover">
            <button
              className="btn btn-outline-warning dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              favourite
            </button>
            <div
              className="dropdown-menu dropdown-menu-right "
              aria-labelledby="dropdownMenuButton"
            >
              <ul>
                {store.favourites.length > 0 ? (
                  listFavourites
                ) : (
                  <p>You do not have any favourite</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  uid: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  kind: PropTypes.string,
};
