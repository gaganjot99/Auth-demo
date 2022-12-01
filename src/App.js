import "./App.css";
import Login from "./Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "./components/Others/Loader";
import ErrorBoundary from "./components/Others/ErrorBoundary";

const Signup = React.lazy(() => import("./Signup"));
const Main = React.lazy(() => import("./Main"));

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div>
        <Suspense fallback={<Loader></Loader>}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Main navigate={navigate} />} />
              <Route path="/login" element={<Login navigate={navigate} />} />
              <Route path="/signup" element={<Signup navigate={navigate} />} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
