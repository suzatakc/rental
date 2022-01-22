import { SignIn } from "./component/Authenticate/SignIn/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/main.scss";
import { SignUp } from "./component/Authenticate/SignUp/SignUp";

function App() {
  return (
    <>
      <SignUp />
      <SignIn />
    </>
  );
}

export default App;
