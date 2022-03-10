import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Species } from "./species";
export const Listspecies = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.setSpecies();
  }, []);
  const listSpecies = store.species.map((item, index) => {
    return (
      <Species
        key={index}
        name={item.name}
        url={item.url}
        uid={item.uid}
        kind={"species"}
      />
    );
  });
  return (
    <div className="text-center mt-5">
      <h1>SPECIES</h1>
      <div className="todo">
        <div className="list">{listSpecies}</div>
      </div>
    </div>
  );
};
