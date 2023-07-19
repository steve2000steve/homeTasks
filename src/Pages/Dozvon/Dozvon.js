import React from "react";
import "./Dozvon.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalInfoLead from "../../ModalsJs/ModalInfoLead";
import { DateRangePicker } from "rsuite";
import subDays from "date-fns/subDays";
import Afganistan from "../../imgs/iconGeo/Afganistan.png";

const ranges = [
  {
    label: "today",
    value: [new Date(), new Date()],
  },
  {
    label: "yesterday",
    value: [subDays(new Date(), 1), subDays(new Date(), 1)],
  },
];

export default function Dozvon() {
  const [infoLeadModal, setActiveInfoLeadModal] = useState();
  const [countLeads, setCountLeads] = useState();
  const [innerCountLeads, setInnerCountLeads] = useState([]);
  const [choseDate, setChoseDate] = useState();
  function dateChose(e) {
    let dateLeadDozvon = new Date(e[0]);
    setChoseDate(dateLeadDozvon.toLocaleDateString());
  }

  function innerFucn() {
    let newArrCount = [];
    for (let i = 1; i <= countLeads; i++) {
      newArrCount.push({
        index: i,
        date: choseDate,
        timeDate: "00:00",
        isFocusChoseTime: true,
        isDeposited: true,
        autoLogin: true,
        callStatus: "Your_Status",
        isFocusedStatus: true,
      });
    }
    setInnerCountLeads(newArrCount);
  }

  function depFunc(e) {
    let arrUpdate = [...innerCountLeads];
    arrUpdate[e].isDeposited = false;
    setInnerCountLeads(arrUpdate);
  }
  function sentFunc(e) {
    let arrUpdate = [...innerCountLeads];
    arrUpdate[e].isDeposited = true;
    setInnerCountLeads(arrUpdate);
  }
  function autologFunc(e) {
    let arrUpdate = [...innerCountLeads];
    arrUpdate[e].autoLogin = false;
    setInnerCountLeads(arrUpdate);
  }
  function NoAutologFunc(e) {
    let arrUpdate = [...innerCountLeads];
    arrUpdate[e].autoLogin = true;
    setInnerCountLeads(arrUpdate);
  }
  function inpStatusFunck(e, index) {
    let arrUpdate = [...innerCountLeads];
    arrUpdate[index].callStatus = e.target.value;
    arrUpdate[index].isFocusedStatus = true;
    setInnerCountLeads(arrUpdate);
  }
  function NoInpStatusFunck(e, index) {
    let arrUpdate = [...innerCountLeads];
    arrUpdate[index].isFocusedStatus = false;
    setInnerCountLeads(arrUpdate);
  }
  function inpTimeFunck(e, index) {
    let arrUpdate = [...innerCountLeads];
    arrUpdate[index].timeDate = e.target.value;
    arrUpdate[index].isFocusChoseTime = true;
    setInnerCountLeads(arrUpdate);
  }
  function NoInpTimeFunck(e, index) {
    let arrUpdate = [...innerCountLeads];
    arrUpdate[index].isFocusChoseTime = false;
    setInnerCountLeads(arrUpdate);
  }

  return (
    <>
      <div className="dozvonBody">
        <ModalInfoLead
          active={infoLeadModal}
          setActive={setActiveInfoLeadModal}
        >
          <div className="BlockModalDozvon">
            <label className="CountLeads">Сколько лидов:</label>
            <input
              className="inpCountLeads"
              type="number"
              placeholder="How much leads?"
              onChange={(e) => setCountLeads(e.target.value)}
            />
          </div>
          <div className="BlockModalDozvon">
            <label className="CountLeads">Дата:</label>
            <DateRangePicker
              oneTap
              showOneCalendar
              ranges={ranges}
              onChange={dateChose}
            />
          </div>
          <div className="BtnDozvonModal" onClick={innerFucn}>
            Отобразить Дозвон
          </div>
        </ModalInfoLead>
        <div style={{ display: "none" }} id="current_date_time_block2">
          <time></time>
        </div>
        <div className="headerTop main__header">
          <div>
            <button
              className="btnModalStats_Main btnHover"
              style={{}}
              onClick={() => setActiveInfoLeadModal(true)}
            >
              Info_Lead
            </button>
          </div>
          <div>
            <button className="btnModalStats_Main">
              <Link className="secondNetworkLink" to="/dozvon">
                Dozvon
              </Link>
            </button>
            <button className="btnModalStats_Main">
              <Link className="secondNetworkLink" to="/mainNetwork">
                MainNetwork
              </Link>
            </button>
            <button className="btnModalStats_Main">
              <Link className="secondNetworkLink" to="/">
                SecondNetwork
              </Link>
            </button>
          </div>
        </div>
        <div className="dozvonMainBlock">
          <div className="dozvonMainHeader">
            <div className="RegBlockDozvon">Registered</div>
            <div className="GeoBlockDozvon">GEO</div>
            <div className="StatusBlockDozvon">Staus</div>
            <div className="TestBlockDozvon">Test</div>
            <div className="AutologinBlockDozvon">Autologin</div>
            <div className="RAWBlockDozvon">RAW status</div>
          </div>
          <div>
            {innerCountLeads.map((info, index) => (
              <>
                <div className="leadBlockDozvon">
                  <div className="RegBlockDozvon_Lead">
                    {info.date}{" "}
                    {innerCountLeads[index].isFocusChoseTime ? (
                      <span onClick={(e) => NoInpTimeFunck(e, index)}>
                        {info.timeDate}
                      </span>
                    ) : (
                      <input
                        className="rawBlock inpTimeBlock"
                        type="text"
                        placeholder={info.timeDate}
                        onBlur={(e) => inpTimeFunck(e, index)}
                      />
                    )}
                  </div>
                  <div className="GeoBlockDozvon_Lead">
                    <img src={Afganistan} alt="" />
                  </div>
                  <div className="StatusBlockDozvon_Lead">
                    {innerCountLeads[index].isDeposited ? (
                      <div className="sentBlock" onClick={() => depFunc(index)}>
                        Sent
                      </div>
                    ) : (
                      <div className="depBlock" onClick={() => sentFunc(index)}>
                        Deposited
                      </div>
                    )}
                  </div>
                  <div className="TestBlockDozvon_Lead">
                    <div className="testBlock">No</div>
                  </div>
                  <div className="AutologinBlockDozvon_Lead">
                    {innerCountLeads[index].autoLogin ? (
                      <div
                        className="autologBlock"
                        onClick={() => autologFunc(index)}
                      >
                        Yes
                      </div>
                    ) : (
                      <div
                        className="NoAutologBlock"
                        onClick={() => NoAutologFunc(index)}
                      >
                        No
                      </div>
                    )}
                  </div>
                  <div className="RAWBlockDozvon_Lead">
                    {innerCountLeads[index].isFocusedStatus ? (
                      <div
                        className="rawBlock"
                        onClick={(e) => NoInpStatusFunck(e, index)}
                      >
                        {info.callStatus}
                      </div>
                    ) : (
                      <input
                        type="text"
                        className="rawBlock"
                        onBlur={(e) => inpStatusFunck(e, index)}
                        placeholder={info.callStatus}
                      />
                    )}
                    {/* <div className="rawBlock">{info.callStatus}</div> */}
                  </div>
                </div>
              </>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
