import { useState } from "react";
import Navicon from "./components/Nav";
import ErrorBoundary from "./components/Others/ErrorBoundary";
import Righthalf from "./components/Righthalf";

const Main = ({ navigate }) => {
  const [showList, setShowList] = useState(true);

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
