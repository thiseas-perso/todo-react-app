import { useState } from "react";

import "./Navbar.css";
import NavbarItem from "./Elements/NavbarItem";
import ListItems from "./Elements/ListItems";
import images from "../Assets";

const Navbar = (props) => {
  const [isActive, setIsActive] = useState("Lists");
  const [folderIcon, setFolderIcon] = useState(images["folder-open.svg"]);

  const handleChange = (data) => {
    setIsActive(data);
    props.setDisplay(data);
    data === "Lists"
      ? setFolderIcon(images["folder-open.svg"])
      : setFolderIcon(images["folder.svg"]);
  };

  const [isItemActive, setIsItemActive] = useState(null);
  const handleItemChange = (data) => {
    setIsItemActive(data);
    props.onAddNewList(data);
  };

  return (
    <nav id="navbar">
      <h2 id="app-name">ToDos</h2>
      <NavbarItem
        title={"Overview"}
        img={images["home.svg"]}
        handleChange={handleChange}
        isActive={isActive}
      />
      <NavbarItem
        title={"Lists"}
        img={folderIcon}
        handleChange={handleChange}
        isActive={isActive}
      />
      {isActive === "Lists" && props.lists.length && (
        <ListItems
          items={props.lists}
          onAddNewList={props.onAddNewList}
          handleChange={handleItemChange}
          isActive={isItemActive}
        />
      )}
      <NavbarItem
        title={"Today"}
        img={images["today.svg"]}
        handleChange={handleChange}
        isActive={isActive}
      />
      <NavbarItem
        title={"This week"}
        img={images["week.svg"]}
        handleChange={handleChange}
        isActive={isActive}
      />
      <NavbarItem
        title={"Notes"}
        img={images["notes.svg"]}
        handleChange={handleChange}
        isActive={isActive}
      />
    </nav>
  );
};

export default Navbar;
