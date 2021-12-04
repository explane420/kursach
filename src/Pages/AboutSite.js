import React from "react";
import { Container } from "react-bootstrap";

const style = { textIndent: "20px"};

export function AboutSite() {
  return (
    <Container fluid>
      <h2 className="text-center m-3"><b>Інформація про наш курс</b></h2>
      <p style={style}>
        Цей інформаційний портал створено для <b>28 навчального курсу</b>
      </p>
      <p style={style}>
        Наш курс завжди приймає участь у різних заходах і змаганнях, де отримує тільки <b>призові</b> місця
      </p>
      <p style={style}>
        Начальником курсу є: <b>старший лейтенант Голуб Олександр Олександрович</b>
      </p>
    </Container>
  );
}
