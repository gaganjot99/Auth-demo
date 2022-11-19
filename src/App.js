import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Main from "./Main";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Main navigate={navigate} />} />
          <Route path="/login" element={<Login navigate={navigate} />} />
          <Route path="/signup" element={<Signup navigate={navigate} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
