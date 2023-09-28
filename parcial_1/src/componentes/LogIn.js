import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormControl, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

function LogIn() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    favClass: "1",
  });

  const [validationStates, setValidationStates] = useState({
    emailState: true, // Supongamos que está inicialmente en un estado válido
    passwordState: true, // Supongamos que está inicialmente en un estado válido
  });

  // Estado para controlar si se debe mostrar el mensaje de error
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
    // Validación del correo electrónico (puedes personalizar esta lógica)
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  // Función para validar el correo electrónico:
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const clickSubmit = (e) => {
    //Se verifica el email
    let newEmail = formValues.email;

    const isValidEmail = validateEmail(newEmail);

    if (!isValidEmail) {
      setShowError(true);
    } else {
      setShowError(false);

      this.setState({
        renderView: +e.target.value,
      });
    }
  };

  return (
    <div>
      <h1>Acceder</h1>

      <h2>Accede con tu cuenta Uniandes</h2>

      <Form style={{ alignItems: "center", width: "18rem", height: "24rem" }}>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Correo Uniandes"
            onChange={handleEmailChange}
            value={formValues.email}
            className={`form-control ${
              showError ? "border border-danger" : ""
            }`}
            isInvalid={showError}
          />
          {showError && (
            <FormControl.Feedback type="invalid">
              <div className="fieldError">Correo con formato invalido!</div>
            </FormControl.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Link to={"#"}>Olvidaste tu correo?</Link>
        </Form.Group>
        <Button variant="primary" onClick={clickSubmit}>
          Siguiente
        </Button>
      </Form>
    </div>
  );
}

export default LogIn;
