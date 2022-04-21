import React, { useRef, useEffect } from "react";

const Modal = (props) => {
  //
  //
  //
  //
  const ref = useRef(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!props.openModal) return null;

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
