import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CreateClass from "../../components/CreateClass";
import CardClass from "../../components/CardClass";

import "./styles.scss";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <CreateClass />
      </div>
      <div>
        <CardClass />
      </div>
      <Footer />
    </>
  );
}
