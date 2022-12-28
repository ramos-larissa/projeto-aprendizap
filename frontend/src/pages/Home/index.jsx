import React from "react";
import Item from "../../components/Item";
import Lesson from "../../components/Lesson";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./styles.scss";

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ padding: 16 }}>
        <p> home </p>
      </div>
      <Footer />
    </>
  );
}

// const Home = () => {
//   return (
//     <div style={{ padding: 16 }}>
//       <Item elevation={0}>
//         <div className="header">Aulas em Gif AprendiZAP</div>
//       </Item>
//       <Lesson />
//     </div>
//   );
// };

// export default Home;
