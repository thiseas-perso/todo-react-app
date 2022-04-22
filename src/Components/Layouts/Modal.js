import React, { useRef, useEffect, useContext } from "react";
import { DashboardContext } from "../../store/dashboard-context";
const Modal = (props) => {
  const { openModal } = useContext(DashboardContext);
  //
  //
  //
  //
  const ref = useRef(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.textContent !== "Add New List"
      ) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  // if (!openModal) return null;

  //
  //
  //

  return (
    <div ref={ref} id="modal">
      {props.children}
    </div>
  );
};
export default Modal;
