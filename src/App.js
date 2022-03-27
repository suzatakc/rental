import { SignIn } from "./component/Authenticate/SignIn/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/main.scss";
import { SignUp } from "./component/Authenticate/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./component/Home/Home";
import { BikesDetailsPage } from "./component/BikeDetailPage/BikeDetailPage";
import { PopupContextProvider } from "./component/Context/PopupContext";
import { UserTable } from "./component/UserTable/UserTable";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route
            path="/bikes"
            element={
              <PopupContextProvider>
                <BikesDetailsPage />
              </PopupContextProvider>
            }
          />
          <Route path="/user-table" element={<UserTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
