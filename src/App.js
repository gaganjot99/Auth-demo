import "./App.css";
import Login from "./Login";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import Loader from "./components/Others/Loader";
import ErrorBoundary from "./components/Others/ErrorBoundary";

const Signup = React.lazy(() => import("./Signup"));
const Main = React.lazy(() => import("./Main"));

function App() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }
    fetch("/api/data/user")
      .then((data) => {
        if (data.redirected) {
          navigate("/login");
        } else {
          return data.json();
        }
      })
      .then((data) => {
        if (!data) {
          navigate("/login");
        } else {
          setUser(true);
        }
      });
  }, []);

  return (
    <div className="App">
      <div>
        <Suspense fallback={<Loader></Loader>}>
          <ErrorBoundary>
            <Routes>
              <Route
                path="/"
                element={
                  user ? <Main navigate={navigate} /> : <Loader></Loader>
                }
              />
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
