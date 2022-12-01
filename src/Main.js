import { useEffect, useState } from "react";
import Navicon from "./components/Nav";
import ErrorBoundary from "./components/Others/ErrorBoundary";
import Righthalf from "./components/Righthalf";

const Main = ({ navigate }) => {
  const [user, setUser] = useState("");
  const [showList, setShowList] = useState(true);
  useEffect(() => {
    fetch("/data/user")
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
          setUser(data);
        }
      });
  }, [navigate]);
  return (
    <div id="main-app">
      <Navicon setShowList={setShowList} showList={showList} />
      <ErrorBoundary>
        <Righthalf showList={showList} />
      </ErrorBoundary>
    </div>
  );
};

export default Main;
