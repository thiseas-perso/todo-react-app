const ListItem = (props) => {
  const clickHandler = () => {
    props.handleItemChange(props.id);
  };

  return (
    <li
      id={props.id}
      onClick={clickHandler}
      className={`nav-sub-item ${
        props.isItemActive === props.id ? "active" : "not-active"
      }`}
    >
      {props.title}
    </li>
  );
};

export default ListItem;
