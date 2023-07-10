import React from "react";
import "../ModalsCss/ModalGraph.css";

export default function ModalGraph({ active, setActive, children }) {
  return (
    <div
      className={active ? "modalGraph active" : "modalGraph"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modalGraph_content active" : "modalGraph_content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
