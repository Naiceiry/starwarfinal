import React, { useContext } from "react";
import { Context } from "../store/appContext";
export const Details = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      {store.properties.map((item, index) => (
        <li key={index}>
          {item[0]}:{item[1]}
        </li>
      ))}
    </div>
  );
};
