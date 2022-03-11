import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Listpeople } from "../component/listpeople";
import { Listspecies } from "../component/listspecies";
import { Listplanets } from "../component/listplanets";
import { People } from "../component/people";
import { Species } from "../component/species";
import { Planets } from "../component/planets";
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="OrgHome text-center">
      <Listpeople />
      <Listspecies />
      <Listplanets />
    </div>
  );
};
