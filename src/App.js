import { SignIn } from "./component/Authenticate/SignIn/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/main.scss";
import { SignUp } from "./component/Authenticate/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./component/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
