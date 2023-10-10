import React from "react";
import "../ModalsCss/ModalStats.css";

export default function ModalStats({
  active,
  setActive,
  setTotalLeads,
  setSendLeads,
  setDepLeads,
  procentsAll,
  children,
}) {
  return (
    <div
      className={active ? "modalStats active" : "modalStats"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modalStats_content active" : "modalStats_content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mainStats">
          <div className="modalBlockWrite">
            <label className="modalLabelStats">Всего лидов : </label>
            <input
              id="totalLeads"
              className="modalnputStats"
              type="number"
              onChange={(e) => setTotalLeads(e.target.value)}
            />
          </div>
          <div className="modalBlockWrite">
            <label className="modalLabelStats">Отправленно лидов : </label>
            <input
              className="modalnputStats"
              type="number"
              onChange={(e) => setSendLeads(e.target.value)}
            />
          </div>
          <div className="modalBlockWrite">
            <label className="modalLabelStats">Депозитов : </label>
            <input
              className="modalnputStats"
              type="number"
              onChange={(e) => setDepLeads(e.target.value)}
            />
          </div>
          {children}
          <div className="btnModalProcent" onClick={procentsAll}>
            Рассчитать статистику
          </div>
        </div>
      </div>
    </div>
  );
}
