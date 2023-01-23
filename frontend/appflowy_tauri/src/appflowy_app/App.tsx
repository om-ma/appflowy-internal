import "./App.css";
import {
  UserEventSignIn,
  SignInPayloadPB,
} from "../services/protobuf/events/flowy-user";
import { nanoid } from "nanoid";
import Home from "./home/index";
import { BrowserRouter as Router, Routes, Route, Link }
from "react-router-dom";


function App() {
  async function greet() {
    let make_payload = () =>
      SignInPayloadPB.fromObject({
        email: nanoid(4) + "@gmail.com",
        password: "A!@123abc",
        name: "abc",
      });
    await UserEventSignIn(make_payload());
  }

  return (
    <div className="container">
      <h1>Welcome to AppFlowy!</h1>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
        </Routes>
        <Link to="/home">
          <button type="button" onClick={() => greet()}>
            Sign in
          </button>
        </Link>
      </Router>
    </div>
  );
}

export default App;
