import { useState } from "react";
import "./Navbar.css";
import NavbarMenuHeader from "./Elements/NavbarMenuHeader";
import Lists from "./Elements/Lists";
import images from "../Assets";

const Navbar = ({
  setDisplayHandler,
  display,
  setIsActiveListHandler,
  isActiveList,
  showNewListHandler,
}) => {
  const [folderIcon, setFolderIcon] = useState(images["folder-open.svg"]);

  const clickHandler = (headerTitle) => {
    setDisplayHandler(headerTitle);
    headerTitle === "Lists"
      ? setFolderIcon(images["folder-open.svg"])
      : setFolderIcon(images["folder.svg"]);
  };

  return (
    <nav id="navbar">
      <h2 id="app-name">ToDos</h2>
      <NavbarMenuHeader
        display={display}
        title={"Overview"}
        img={images["home.svg"]}
        onClick={clickHandler}
      />
      <NavbarMenuHeader
        display={display}
        title={"Lists"}
        img={folderIcon}
        onClick={clickHandler}
      />
      {display === "Lists" && (
        <Lists
          setIsActiveListHandler={setIsActiveListHandler}
          isActiveList={isActiveList}
          showNewListHandler={showNewListHandler}
        />
      )}
      <NavbarMenuHeader
        display={display}
        title={"Today"}
        img={images["today.svg"]}
        onClick={clickHandler}
      />
      <NavbarMenuHeader
        display={display}
        title={"This week"}
        img={images["week.svg"]}
        onClick={clickHandler}
      />
      <NavbarMenuHeader
        display={display}
        title={"Notes"}
        img={images["notes.svg"]}
        onClick={clickHandler}
      />
    </nav>
  );
};

export default Navbar;
