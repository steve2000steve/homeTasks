import React from "react";
import { useState } from "react";
import "./MainNetwork.css";
import { Link } from "react-router-dom";
import ModalStats from "../../ModalsJs/ModalStats";
import { BiCalendarAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import ModalDateAndGeo from "../../ModalsJs/ModalDateAndGeo";
import { DateRangePicker, Stack } from "rsuite";
import { MultiSelect } from "primereact/multiselect";
import objCountries from "../../imports.js";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import globeImg from "../../imgs/GlobeMain.png";
import searchMain from "../../imgs/SearchMain.png";
import { FiHelpCircle } from "react-icons/fi";
import affIcon from "../../imgs/affIcon.png";
import arrowIcon from "../../imgs/arrowIcon.png";
import brandIcon from "../../imgs/BrandIcon.png";
import vectorIcon from "../../imgs/VerticalIcon.png";
import subDays from "date-fns/subDays";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import addDays from "date-fns/addDays";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import addMonths from "date-fns/addMonths";
const predefinedRanges = [
  {
    label: "Today",
    value: [new Date(), new Date()],
    placement: "left",
  },
  {
    label: "Yesterday",
    value: [addDays(new Date(), -1), addDays(new Date(), -1)],
    placement: "left",
  },
  {
    label: "This week",
    value: [startOfWeek(new Date()), endOfWeek(new Date())],
    placement: "left",
  },
  {
    label: "Last 7 days",
    value: [subDays(new Date(), 6), new Date()],
    placement: "left",
  },
  {
    label: "Last 30 days",
    value: [subDays(new Date(), 29), new Date()],
    placement: "left",
  },
  {
    label: "This month",
    value: [startOfMonth(new Date()), new Date()],
    placement: "left",
  },
  {
    label: "Last month",
    value: [
      startOfMonth(addMonths(new Date(), -1)),
      endOfMonth(addMonths(new Date(), -1)),
    ],
    placement: "left",
  },
  {
    label: "This year",
    value: [new Date(new Date().getFullYear(), 0, 1), new Date()],
    placement: "left",
  },
  {
    label: "Last year",
    value: [
      new Date(new Date().getFullYear() - 1, 0, 1),
      new Date(new Date().getFullYear(), 0, 0),
    ],
    placement: "left",
  },
  {
    label: "All time",
    value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date()],
    placement: "left",
  },
  {
    label: "Last week",
    closeOverlay: false,
    value: (value) => {
      const [start = new Date()] = value || [];
      return [
        addDays(startOfWeek(start, { weekStartsOn: 0 }), -7),
        addDays(endOfWeek(start, { weekStartsOn: 0 }), -7),
      ];
    },
    appearance: "default",
  },
  {
    label: "Next week",
    closeOverlay: false,
    value: (value) => {
      const [start = new Date()] = value || [];
      return [
        addDays(startOfWeek(start, { weekStartsOn: 0 }), 7),
        addDays(endOfWeek(start, { weekStartsOn: 0 }), 7),
      ];
    },
    appearance: "default",
  },
];

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

  const [innerTotalLeads, setInnerTotalLeads] = useState(0);
  const [innerSendLeads, setInnerSendLeads] = useState(0);
  const [innerDepLeads, setInnerDepLeads] = useState(0);
  function procentsAll() {
    setInnerTotalLeads(totalLeads);
    setInnerSendLeads(sendLeads);
    setInnerDepLeads(depLeads);
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
    } else if (countProcentSend.length == 1) {
      resultProcentSend = countProcentSend[0];
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
    } else if (countProcentDeps.length == 1) {
      resultProcentDeps = countProcentDeps[0];
      setProcentsDepLeads(resultProcentDeps);
    }
  }

  const [currentDateFirst, setCurrentDateFirst] = useState("");
  const [currentDateSecond, setCurrentDateSecond] = useState("");
  const [currentMonthFirst, setCurrentMonthFirst] = useState("");
  const [currentMonthSecond, setCurrentMonthSecond] = useState("");
  const [currentYearFirst, setCurrentYearFirst] = useState("");

  function dateNewArr(e) {
    let totalArrDate = e.join(",");
    setCurrentDateFirst(totalArrDate.slice(8, 10));
    setCurrentDateSecond(totalArrDate.slice(74, 78));
    setCurrentYearFirst(totalArrDate.slice(11, 15));
    setCurrentMonthFirst(totalArrDate.slice(4, 7));
    setCurrentMonthSecond(totalArrDate.slice(70, 74));
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

  const [blure, setBlure] = useState(false);
  function toggle() {
    if (blure == false) {
      setBlure(true);
    } else {
      setBlure(false);
    }
  }

  return (
    <>
      <div className="mainNetwork__body">
        <div className="headerTop main__header">
          <div style={{ display: "flex" }}>
            <button
              className="btnModalStats_Main btnHover"
              id="modalBtn"
              onClick={() => setActiveModalStats(true)}
            >
              Stats
            </button>
            <button
              className="btnModalStats_Main btnHover modalBtn"
              id="modalBtn"
              onClick={() => setActiveModalDateAndGeo(true)}
            >
              DateAndGeo
            </button>
            <button
              className="btnModalStats_Main btnHover modalBtn"
              id="modalBtn"
              onClick={toggle}
            >
              BrureInfo
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
            <Stack direction="column" spacing={8} alignItems="flex-start">
              <DateRangePicker
                style={{ color: "#00000" }}
                ranges={predefinedRanges}
                onChange={dateNewArr}
              />
            </Stack>
          </div>
          <div className="DateModalBlock__Main">
            <div
              className="dateTitle"
              style={{ marginRight: "20px", color: "white" }}
            >
              Geo:
            </div>
            <div className=" flex justify-content-center">
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
          <div className="MainBlocksBottom_Main">
            <div className="dateMainBlock__Main">
              <div className="iconCalendar">
                <BiCalendarAlt className="iconCalendar__Main" />
              </div>
              <div className="tittleDate__Main">Date:</div>
              <div className="date__Main">
                {`${currentDateFirst} ${currentMonthFirst}. ${currentYearFirst}`}
                <span className="tab"> – </span>{" "}
                {`${currentDateSecond} ${currentMonthSecond}. ${currentYearFirst}`}
              </div>
            </div>
            <div className="timeGap">
              <div className="choseDate__Main">Day</div>
              <div className="choseDate__Main">Week</div>
              <div className="choseDate__Main lastBlockChoseDate">Month</div>
            </div>
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

            <div className="affBlockMain_Main">
              <div className={blure ? "blureInfo active" : "blureInfo"}></div>
              <div className="affBlockMainIMG_Main">
                <img src={affIcon} alt="" />
              </div>
              <div
                className="affBlockMainTEXT_Main"
                style={{
                  color: "#7f7475",
                  marginLeft: "10px",
                  marginRight: "10px",
                  // width: "150px",
                }}
              >
                Affiliate
              </div>
              <div className="affBlockMainICON_Main">
                <img src={arrowIcon} alt="" />
              </div>
            </div>
            <div className="affBlockMain_Main">
              <div className={blure ? "blureInfo active" : "blureInfo"}></div>
              <div className="affBlockMainIMG_Main">
                <img src={brandIcon} alt="" />
              </div>
              <div
                className="affBlockMainTEXT_Main"
                style={{
                  color: "#7f7475",
                  marginLeft: "10px",
                  marginRight: "10px",
                  // width: "150px",
                }}
              >
                Brand
              </div>
              <div className="affBlockMainICON_Main">
                <img src={arrowIcon} alt="" />
              </div>
            </div>
            <div className="affBlockMain_Main">
              <div className={blure ? "blureInfo active" : "blureInfo"}></div>
              <div className="affBlockMainIMG_Main">
                <img src={vectorIcon} alt="" />
              </div>
              <div
                className="affBlockMainTEXT_Main"
                style={{
                  color: "#7f7475",
                  marginLeft: "10px",
                  marginRight: "10px",
                  // width: "150px",
                }}
              >
                Vertical
              </div>
              <div className="affBlockMainICON_Main">
                <img src={arrowIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="statsMainBlock__Main">
          <div className="totalLeadsBlock__Main">
            <span className="totalLeadsTittle__Main">Total Leads</span>
            <span className="totalLeadsCount__Main">{innerTotalLeads}</span>
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
              <span className="sentLeadsCount__Main">{innerSendLeads}</span>
              <span className="sentLeadsPocent__Main">{procentSendLeads}%</span>
            </div>
            <div className="depsMainBlock__Main">
              <span className="depsTittle__Main">Deposits</span>
              <span className="depsLeadsCount__Main">{innerDepLeads}</span>
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
