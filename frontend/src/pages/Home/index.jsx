import React from "react";
import Item from "../../components/Item";
import Lesson from "../../components/Lesson";

import "./styles.scss";

const Home = () => {
  return (
    <div style={{ padding: 16 }}>
      <Item elevation={0}>
        <div className="header">Aulas em Gif AprendiZAP</div>
      </Item>
      <Lesson />
    </div>
  );
};

export default Home;
