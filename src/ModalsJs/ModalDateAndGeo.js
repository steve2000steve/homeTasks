import React from "react";
import "../ModalsCss/ModalDateAndGeo.css";

export default function ModalDateAndGeo({ active, setActive, children }) {
  return (
    <div
      className={active ? "modalDateAndGeo active" : "modalDateAndGeo"}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? "modalDateAndGeo_content active" : "modalDateAndGeo_content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
