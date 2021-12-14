import React from "react";
import "./modal.scss";

function ModalWindow(props) {
  function handleClose(e) {
    props.onClose?.(e);
  }

  return (
    <div className="modalWindow">
      <div className="background" onClick={(e) => handleClose(e)}>
        <div className="window">
          <div className="title">
            <span>{props.title}</span>
            {!!props.onClose && (
              <button className="button" onClick={(e) => handleClose(e)}>
                x
              </button>
            )}
          </div>
          <hr />
          <div className="content">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
