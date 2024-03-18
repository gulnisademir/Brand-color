import React, { useContext } from "react";
import { Search } from "./Search";
import { Brand } from "./Brand";
import { MainContext } from "../MainContext";
import LazyLoad from "react-lazy-load";

export const Content = () => {
  const { brands } = useContext(MainContext);

  return (
    <main className="content">
      <header className="header">
        <Search />
      </header>
      <section className="brands">
        {brands.map((brand, index) => (
          <LazyLoad key={index} once={true} overflow={true} placeholder="Loading...">
            <Brand key={index} brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
};
