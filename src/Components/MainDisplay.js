import DisplayContent from "./Elements/DisplayContent";
import "./MainDisplay.css";

import ViewOverview from "./Views/ViewOverview";

const MainDisplay = (props) => {
  return (
    <div id="main-display">
      {props.display === "Overview" && <ViewOverview />}
    </div>
  );
};

export default MainDisplay;
