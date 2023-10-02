import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import React from "react";

function LogIn() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    favClass: "1",
  });

  // Estado para controlar si se debe mostrar el mensaje de error
  const [showError, setShowError] = useState(false);

  const [placeholder, setPlaceHolder] = useState();

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
    // Validación del correo electrónico
  };

  // Función para validar el correo electrónico:
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Para detectar el idioma del navegador y asigarlo a la app:
  const userLocale = navigator.language;

  function placeholderGet() {
    let string = undefined;
    if (userLocale.includes("en")) {
      string = "Email Account";
    } else if (userLocale.includes("es")) {
      string = "Correo electronico";
    }
    setPlaceHolder(string);
  }

  // chequea valor de placeholder
  useEffect(() => {
    placeholderGet();
  }, []);

  const clickSubmit = (e) => {
    //Se verifica el email
    let newEmail = formValues.email;

    const isValidEmail = validateEmail(newEmail);

    if (!isValidEmail) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <div>
      <h1>
        <FormattedMessage id="Access" />
      </h1>

      <h2>
        <FormattedMessage id="Access with your UniAlpes account" />
      </h2>

      <Form style={{ alignItems: "center", width: "18rem", height: "24rem" }}>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          {console.log(placeholder)}
          <Form.Control
            type="email"
            placeholder={placeholder}
            onChange={handleEmailChange}
            value={formValues.email}
            className={`form-control ${
              showError ? "border border-danger" : ""
            }`}
            isInvalid={showError}
          />
          {showError && (
            <FormControl.Feedback type="invalid">
              <div className="fieldError">
                <FormattedMessage id="Email with invalid format!" />
              </div>
            </FormControl.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Link to={"#"}>
            {" "}
            <FormattedMessage id="Forgot your email?" />
          </Link>
        </Form.Group>
        <Button variant="primary" onClick={clickSubmit}>
          <FormattedMessage id="Next" />
        </Button>
      </Form>
    </div>
  );
}

export default LogIn;
