import { useContext, useState } from "react";

import "./Navbar.css";
import NavbarMenuHeader from "./Elements/NavbarMenuHeader";
import Lists from "./Elements/Lists";
import images from "../Assets";

import { DashboardContext } from "../store/dashboard-context";

const Navbar = () => {
  const ctx = useContext(DashboardContext);

  const [folderIcon, setFolderIcon] = useState(images["folder-open.svg"]);

  const clickHandler = (headerTitle) => {
    ctx.setDisplayHandler(headerTitle);
    headerTitle === "Lists"
      ? setFolderIcon(images["folder-open.svg"])
      : setFolderIcon(images["folder.svg"]);
  };

  return (
    <nav id="navbar">
      <h2 id="app-name">ToDos</h2>
      <NavbarMenuHeader
        title={"Overview"}
        img={images["home.svg"]}
        onClick={clickHandler}
      />
      <NavbarMenuHeader
        title={"Lists"}
        img={folderIcon}
        onClick={clickHandler}
      />
      {ctx.display === "Lists" && ctx.lists.length > 0 && <Lists />}
      <NavbarMenuHeader
        title={"Today"}
        img={images["today.svg"]}
        onClick={clickHandler}
      />
      <NavbarMenuHeader
        title={"This week"}
        img={images["week.svg"]}
        onClick={clickHandler}
      />
      <NavbarMenuHeader
        title={"Notes"}
        img={images["notes.svg"]}
        onClick={clickHandler}
      />
    </nav>
  );
};

export default Navbar;
