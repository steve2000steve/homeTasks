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
      className={active ? "modalStatsMain active" : "modalStatsMain"}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? "modalStats_contentMain active" : "modalStats_contentMain"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mainStatsMain">
          <div className="modalBlockWriteMain">
            <label className="modalLabelStatsMain">Всего лидов : </label>
            <input
              id="totalLeads"
              className="modalnputStatsMain"
              type="number"
              onChange={(e) => setTotalLeads(e.target.value)}
            />
          </div>
          <div className="modalBlockWriteMain">
            <label className="modalLabelStatsMain">Отправленно лидов : </label>
            <input
              className="modalnputStatsMain"
              type="number"
              onChange={(e) => setSendLeads(e.target.value)}
            />
          </div>
          <div className="modalBlockWriteMain">
            <label className="modalLabelStats">Депозитов : </label>
            <input
              className="modalnputStatsMain"
              type="number"
              onChange={(e) => setDepLeads(e.target.value)}
            />
          </div>
          {children}
          <div className="btnModalProcentMain" onClick={procentsAll}>
            Рассчитать статистику
          </div>
        </div>
      </div>
    </div>
  );
}
