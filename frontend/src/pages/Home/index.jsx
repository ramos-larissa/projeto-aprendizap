import React, { useEffect, useState } from 'react';
import Service from '../../services/Service';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CreateClass from '../../components/CreateClass';
import CardClass from '../../components/CardClass';

import './styles.scss';

export default function Home() {
  const [body, setBody] = useState(0);
  useEffect(() => {
    Service.getList()
      .then((response) => {
        const { data } = response;
        setBody(data);
        return body;
      })
      .catch((error) => {
        window.alert(`${error} Erro ao carregar aulas`);
      });
  }, ['']);

  return (
    <div className="container-home">
      <Header />
      <div>
        <CreateClass />
      </div>
      <div>
        {Object.keys(body).map((item, value) => {
          return <CardClass data={body[item]} index={value} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
