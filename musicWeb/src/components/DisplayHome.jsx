import React from "react";
import NavBar from "./NavBar";
import { albumsData } from "../assets/frontend-assets/assets";
import AlubumItem from "./AlubumItem";

const DisplayHome = () => {
  return (
    <>
      <NavBar />

      <div className="my-5 font-bold text-2xl">
        {albumsData.map((item, index) => (
          <AlubumItem
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default DisplayHome;
