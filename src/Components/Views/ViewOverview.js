import { useSelector } from "react-redux";
import OverviewCard from "./OverviewCard";

import "./ViewOverview.css";

const ViewOverview = () => {
  const lists = useSelector((state) => state.lists.lists);
  return (
    <div id="main-display-overview">
      {lists.map((list) => (
        <OverviewCard key={list.id} title={list.title} todos={list.todos} />
      ))}
    </div>
  );
};

export default ViewOverview;
