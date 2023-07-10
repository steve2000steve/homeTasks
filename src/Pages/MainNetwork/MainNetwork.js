import React from "react";
import { useState } from "react";
import "./MainNetwork.css";
import { Link } from "react-router-dom";
import ModalStats from "../../ModalsJs/ModalStats";
import { BiCalendarAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import ModalDateAndGeo from "../../ModalsJs/ModalDateAndGeo";
import { DateRangePicker } from "rsuite";
import { MultiSelect } from "primereact/multiselect";
import objCountries from "../../imports.js";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import globeImg from "../../imgs/GlobeMain.png";
import searchMain from "../../imgs/SearchMain.png";
import { FiHelpCircle } from "react-icons/fi";

function MainNetwork() {
  const [activeModalStats, setActiveModalStats] = useState();
  const [activeModalDateAndGeo, setActiveModalDateAndGeo] = useState();

  function zero_first_format(value) {
    if (value < 10) {
      value = "0" + value;
    }
    return value;
  }
  function date_time() {
    let current_datetime = new Date();
    let day = zero_first_format(current_datetime.getDate());
    let month = zero_first_format(current_datetime.getMonth() + 1);
    let year = current_datetime.getFullYear();
    let hours = zero_first_format(current_datetime.getHours());
    let minutes = zero_first_format(current_datetime.getMinutes());
    return day + "." + month + "." + year + " " + hours + ":" + minutes;
  }
  setInterval(function () {
    document.getElementById("current_date_time_block2").innerHTML = date_time();
  }, 1000);

  const [totalLeads, setTotalLeads] = useState(0);
  const [sendLeads, setSendLeads] = useState(0);
  const [depLeads, setDepLeads] = useState(0);

  const [procentSendLeads, setProcentsSendLeads] = useState(0);
  const [procentDepLeads, setProcentsDepLeads] = useState(0);

  function procentsAll() {
    const countProcentSend = ((sendLeads * 100) / totalLeads)
      .toString()
      .split(".");
    let resultProcentSend = "";
    if (countProcentSend.length !== 1) {
      resultProcentSend = countProcentSend[0].concat(
        ".",
        countProcentSend[1].slice(0, 2)
      );
      setProcentsSendLeads(resultProcentSend);
    } else {
      resultProcentSend = "100";
      setProcentsSendLeads(resultProcentSend);
    }

    const countProcentDeps = ((depLeads * 100) / sendLeads)
      .toString()
      .split(".");
    let resultProcentDeps;
    if (countProcentDeps.length !== 1) {
      resultProcentDeps = countProcentDeps[0].concat(
        ".",
        countProcentDeps[1].slice(0, 2)
      );
      setProcentsDepLeads(resultProcentDeps);
    } else {
      resultProcentDeps = "100";
      setProcentsDepLeads(resultProcentDeps);
    }
  }

  const [dateArrNew, setDateArrNew] = useState([]);
  const zeroLength = 2;

  function dateNewArr(e) {
    let dateTotalArr = [];
    let totalArrDate = e.join(",");
    let newArrayFirst = totalArrDate.slice(4, 15);
    let newArraySecond = totalArrDate.slice(70, 82);
    let currentDateFirst = totalArrDate.slice(8, 10);
    let currentDateSecond = totalArrDate.slice(74, 78);
    let currentYear = totalArrDate.slice(11, 15);
    let currentMonthFirst = totalArrDate.slice(4, 7);
    let currentMonthSecond = totalArrDate.slice(70, 74);
    console.log(
      newArrayFirst,
      newArraySecond,
      currentYear,
      currentMonthFirst,
      currentMonthSecond
    );

    for (
      let i = Number(currentDateFirst);
      i <= Number(currentDateSecond);
      i++
    ) {
      dateTotalArr.push(
        `${String(i).padStart(
          zeroLength,
          "0"
        )} ${currentMonthFirst}. ${currentYear}`
      );
    }
    setDateArrNew(dateTotalArr);
  }

  const [selectedCities, setSelectedCities] = useState([]);

  function changeAndTooltip(e) {
    setSelectedCities(e.value);
  }
  let tooltipCountries = [];

  if (selectedCities !== null) {
    for (
      let countCities = 0;
      countCities < selectedCities.length;
      countCities++
    ) {
      tooltipCountries.push(selectedCities[countCities].name);
    }
  }

  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      width: 210,
      opacity: 0.1,
      backgroundColor: "#3a374a",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "400",
      fontSize: "12px",
      padding: "8px 20px",
      whiteSpace: "pre-wrap",
      overflowWrap: "break-word",
      wordWrap: "break-word",
    },
  });

  return (
    <>
      <div className="mainNetwork__body">
        <div className="headerTop main__header">
          <div style={{ display: "flex" }}>
            <button
              className="btnModalStats_Main btnHover"
              onClick={() => setActiveModalStats(true)}
            >
              Stats
            </button>
            <button
              className="btnModalStats_Main btnHover"
              onClick={() => setActiveModalDateAndGeo(true)}
            >
              DateAndGeo
            </button>
          </div>
          <div>
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
        <ModalStats
          active={activeModalStats}
          setActive={setActiveModalStats}
          setTotalLeads={setTotalLeads}
          setSendLeads={setSendLeads}
          setDepLeads={setDepLeads}
          procentsAll={procentsAll}
        />
        <ModalDateAndGeo
          active={activeModalDateAndGeo}
          setActive={setActiveModalDateAndGeo}
        >
          <div className="DateModalBlock__Main">
            <div
              className="dateTitle"
              style={{ marginRight: "20px", color: "white" }}
            >
              Date:
            </div>
            <DateRangePicker onChange={dateNewArr} />
          </div>
          <div className="DateModalBlock__Main">
            <div
              className="dateTitle"
              style={{ marginRight: "20px", color: "white" }}
            >
              Geo:
            </div>
            <MultiSelect
              value={selectedCities}
              onChange={changeAndTooltip}
              options={objCountries}
              optionLabel="name"
              placeholder="Select Cities"
              maxSelectedLabels={2}
              className="w-full md:w-20rem selectInp"
              filter
            />
          </div>
        </ModalDateAndGeo>
        <div className="headerTittle__Main">
          <h1>Statistics</h1>
        </div>
        <div className="headerMainBlock__Main">
          <div className="searchBar">
            <img src={searchMain} alt="" style={{ marginRight: "8px" }} />
            <span className="search__Inp">
              Search by name, status or email...
            </span>
          </div>
          <div className="BottomHeader__Main">
            <div className="dateMainBlock__Main">
              <div className="iconCalendar">
                <BiCalendarAlt className="iconCalendar__Main" />
              </div>
              <div className="tittleDate__Main">Date:</div>
              <div className="date__Main">
                {dateArrNew[0]} <span className="tab"> – </span>{" "}
                {dateArrNew[dateArrNew.length - 1]}
              </div>
            </div>
            <div className="choseDate__Main">Day</div>
            <div className="choseDate__Main">Week</div>
            <div className="choseDate__Main">Month</div>
            <div className="countyMainBlock__Main">
              <div className="iconGeo__Main">
                {selectedCities.length > 1 ? (
                  <CustomWidthTooltip title={tooltipCountries.join()} arrow>
                    <div className="countGeos__Main">
                      {selectedCities.length - 1} +
                    </div>
                  </CustomWidthTooltip>
                ) : (
                  <img style={{ width: "20px" }} src={globeImg} alt="" />
                )}
              </div>
              <div className="geoBlock__Main">
                {selectedCities.length == 0
                  ? "Select Geo"
                  : selectedCities[selectedCities.length - 1].name}
              </div>
              <div className="deleteGeo__Main">
                <RxCross2 />
              </div>
            </div>
          </div>
        </div>
        <div className="statsMainBlock__Main">
          <div className="totalLeadsBlock__Main">
            <span className="totalLeadsTittle__Main">Total Leads</span>
            <span className="totalLeadsCount__Main">{totalLeads}</span>
            <div className="dateBlock__Main">
              <div className="dateTittle__Main">Data is relevant for</div>
              <div
                id="current_date_time_block2"
                style={{
                  background: "#3b3a49",
                  border: "none",
                  color: "white",
                  padding: "2px 4px",
                  width: "max-content",
                  height: "max-content",
                  fontSize: "12px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "500",
                }}
              >
                <time></time>
              </div>
            </div>
          </div>
          <div className="sentAndDepsBlocks__Main">
            <div className="sentMainBlock__Main">
              <span className="sentTittle__Main">Sent</span>
              <span className="sentLeadsCount__Main">{sendLeads}</span>
              <span className="sentLeadsPocent__Main">{procentSendLeads}%</span>
            </div>
            <div className="depsMainBlock__Main">
              <span className="depsTittle__Main">Deposits</span>
              <span className="depsLeadsCount__Main">{depLeads}</span>
              <span className="depsLeadsPocent__Main">
                {depLeads == 0 ? "0.00%" : `${procentDepLeads}%`}
              </span>
            </div>
          </div>
          <div
            className="lineGradient__Main"
            style={
              depLeads == 0
                ? {
                    background: `linear-gradient(92.69deg,#FEA04C 0%,#e5508a 100%`,
                  }
                : {
                    background: `linear-gradient(92.69deg,#FEA04C 0%,#e5508a ${
                      100 - Number(procentDepLeads)
                    }%, white ${parseInt(procentDepLeads)}%)`,
                  }
            }
          ></div>
        </div>
        <Tooltip
          title="Что б сделать скриншот вам понадобиться сочетание клавишей WIN+SHIFT+S. После вам нужно вставить его в телеграмм CTRL+V(Или вставить мышкой)"
          arrow
        >
          <div className="helpIcon">
            <FiHelpCircle />
          </div>
        </Tooltip>
      </div>
    </>
  );
}

export default MainNetwork;
