import { BrowserRouter as Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import ProtectedRouter from "./Assests/ProtectedRouter";

import Home from "./Pages/HomePage/Home";
function App() {
  return (
    <Routes>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <ProtectedRouter path="/" component={Home} />
    </Routes>
  );
}
export default App;
