import "./MainDisplay.css";

import ViewOverview from "./Views/ViewOverview";

const MainDisplay = (props) => {
  return (
    <div id="main-display">
      {props.display === "Overview" && <ViewOverview items={props.items} />}
    </div>
  );
};

export default MainDisplay;
