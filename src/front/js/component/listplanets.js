import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Planets } from "./planets";
export const Listplanets = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.setPlanets();
  }, []);
  const listPlanets = store.planets.map((item, index) => {
    return (
      <Planets
        key={index}
        name={item.name}
        url={item.url}
        uid={item.uid}
        kind={"planets"}
      />
    );
  });
  return (
    <div className="text-center mt-5">
      <h1>PLANETS</h1>
      <div className="todo">
        <div className="list">{listPlanets}</div>
      </div>
    </div>
  );
};
