import "./MainDisplay.css";

import ViewOverview from "./Views/ViewOverview";
import ViewListTodos from "./Views/ViewListTodos";

const MainDisplay = (props) => {
  return (
    <div id="main-display">
      {props.display === "Overview" && <ViewOverview items={props.items} />}
      {props.display === "Lists" && <ViewListTodos items={props.items} />}
    </div>
  );
};

export default MainDisplay;
