import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import LogIn from "./componentes/LogIn.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
