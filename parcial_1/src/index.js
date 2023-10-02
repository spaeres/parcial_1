import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { IntlProvider } from "react-intl";
import messagesEnglish from "./locales/en";
import messagesSpanish from "./locales/es";

// Para detectar el idioma del navegador y asigarlo a la app:
const userLocale = navigator.language;

let idioma;
let messages;
if (userLocale.includes("en")) {
  idioma = "en";
  messages = messagesEnglish;
} else if (userLocale.includes("es")) {
  idioma = "es";
  messages = messagesSpanish;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IntlProvider locale={idioma} messages={messages}>
    <React.StrictMode>
      <Container>
        <Row xs={1}>
          <Col>
            <App />
          </Col>
        </Row>
      </Container>
    </React.StrictMode>
  </IntlProvider>
);
