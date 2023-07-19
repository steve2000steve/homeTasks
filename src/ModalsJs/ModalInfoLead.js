import React from "react";
import "../ModalsCss/ModalInfoLead.css";

export default function ModalInfoLead({ active, setActive, children }) {
  return (
    <div
      className={active ? "modalInfo active" : "modalInfo"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modalInfo_content active" : "modalInfo_content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
