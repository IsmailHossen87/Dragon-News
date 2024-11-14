import React from "react";
import Header from "../Header/Header";
import LeatestNews from "./LeatestNews";
import Navbar from "./Navbar";
import LeftNavbar from "../Components-Layout/LeftNavbar";
import RightNav from "../Components-Layout/RightNav";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="poppins">
      {/* part 1 */}
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LeatestNews></LeatestNews>
        </section>
      </header>
      {/* part 2 */}
      <section className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </section>
      {/* part 3 */}
      <main>
        <main className="w-11/12 mx-auto grid md:grid-cols-12">
          <aside className="col-span-3">
            <LeftNavbar></LeftNavbar>
          </aside>
          <aside className="col-span-6">
          <Outlet></Outlet>
          </aside>
          <aside className="col-span-3">
            <RightNav></RightNav>
          </aside>
        </main>
      </main>
     
    </div>
  );
};

export default HomeLayout;
