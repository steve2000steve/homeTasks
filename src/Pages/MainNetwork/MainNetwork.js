import React from "react";
import { Fragment, useState } from "react";
import "./MainNetwork.css";
import { Link } from "react-router-dom";
import ModalStats from "../../ModalsJs/ModalStats";
import { BiCalendarAlt } from "react-icons/bi";
// import { RxCross2 } from "react-icons/rx";
import ModalDateAndGeo from "../../ModalsJs/ModalDateAndGeo";
import ModalGraph from "../../ModalsJs/ModalGraph";
import { DateRangePicker, Stack } from "rsuite";
import { MultiSelect } from "primereact/multiselect";
import objCountries from "../../imports.js";
import Tooltip from "@mui/material/Tooltip";
// import { styled } from "@mui/material/styles";
// import { tooltipClasses } from "@mui/material/Tooltip";
import globeImg from "../../imgs/GlobeMain.png";
// import searchMain from "../../imgs/SearchMain.png";
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
import newLead from "../../imgs/newLead.png";
import sentLead from "../../imgs/sendLead.png";
import depLead from "../../imgs/depLead.png";
import failLead from "../../imgs/failLead.png";
import { Bar } from "react-chartjs-2";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
// import { CategoryScale, Chart } from "chart.js";
// import { registerables } from "chart.js";
// Chart.register(CategoryScale);
// Chart.register(...registerables);

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
  const [activeModalGraph, setActiveModalGraph] = useState();

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
  const [newLeads, setNewLeads] = useState(0);
  const [failLeads, setFailLeads] = useState(0);
  const [procentSendLeads, setProcentsSendLeads] = useState(0);
  const [procentDepLeads, setProcentsDepLeads] = useState(0);
  const [procentNewLeads, setProcentsNewLeads] = useState(0);
  const [procentFailLeads, setProcentsFailLeads] = useState(0);

  const [innerTotalLeads, setInnerTotalLeads] = useState(0);
  const [innerSendLeads, setInnerSendLeads] = useState(0);
  const [innerDepLeads, setInnerDepLeads] = useState(0);
  const [innerNewLeads, setInnerNewLeads] = useState(0);
  const [innerFailLeads, setInnerFailLeads] = useState(0);
  function procentsAll() {
    setInnerTotalLeads(totalLeads);
    setInnerSendLeads(sendLeads);
    setInnerDepLeads(depLeads);
    setInnerNewLeads(newLeads);
    setInnerFailLeads(failLeads);
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
    } else if (countProcentSend.length === 1) {
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
    } else if (countProcentDeps.length === 1) {
      resultProcentDeps = countProcentDeps[0];
      setProcentsDepLeads(resultProcentDeps);
    }

    const countProcentNew = ((newLeads * 100) / totalLeads)
      .toString()
      .split(".");
    let resultProcentNew;
    if (countProcentNew.length !== 1) {
      resultProcentNew = countProcentNew[0].concat(
        ".",
        countProcentNew[1].slice(0, 2)
      );
      setProcentsNewLeads(resultProcentNew);
    } else if (countProcentNew.length === 1) {
      resultProcentNew = countProcentNew[0];
      setProcentsNewLeads(resultProcentNew);
    }

    const countProcentFail = ((failLeads * 100) / totalLeads)
      .toString()
      .split(".");
    let resultProcentFail;
    if (countProcentFail.length !== 1) {
      resultProcentFail = countProcentFail[0].concat(
        ".",
        countProcentFail[1].slice(0, 2)
      );
      setProcentsFailLeads(resultProcentFail);
    } else if (countProcentFail.length === 1) {
      resultProcentFail = countProcentFail[0];
      setProcentsFailLeads(resultProcentFail);
    }
  }

  const [currentDateFirst, setCurrentDateFirst] = useState("");
  const [currentDateSecond, setCurrentDateSecond] = useState("");
  const [currentMonthFirst, setCurrentMonthFirst] = useState("");
  const [currentMonthSecond, setCurrentMonthSecond] = useState("");
  const [currentYearFirst, setCurrentYearFirst] = useState("");

  const [state, setState] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  var optionsDate = {
    month: "long",
  };

  function dateNewArrTest(e) {
    setState([e.selection]);
    let newArrDate = [];
    newArrDate.push(e.selection.endDate, e.selection.startDate);
    let totalArrDate = newArrDate.join(",");
    setCurrentDateFirst(newArrDate[1].getDate());
    setCurrentDateSecond(newArrDate[0].getDate());
    setCurrentYearFirst(totalArrDate.slice(11, 15));
    setCurrentMonthFirst(
      newArrDate[1].toLocaleString("en", optionsDate).slice(0, 3)
    );
    setCurrentMonthSecond(
      newArrDate[0].toLocaleString("en", optionsDate).slice(0, 3)
    );
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

  // const CustomWidthTooltip = styled(({ className, ...props }) => (
  //   <Tooltip {...props} classes={{ popper: className }} />
  // ))({
  //   [`& .${tooltipClasses.tooltip}`]: {
  //     width: 210,
  //     opacity: 0.1,
  //     backgroundColor: "#3a374a",
  //     fontFamily: "Montserrat, sans-serif",
  //     fontWeight: "400",
  //     fontSize: "12px",
  //     padding: "8px 20px",
  //     whiteSpace: "pre-wrap",
  //     overflowWrap: "break-word",
  //     wordWrap: "break-word",
  //   },
  // });

  const [blure, setBlure] = useState(false);
  function toggle() {
    if (blure === false) {
      setBlure(true);
    } else {
      setBlure(false);
    }
  }

  const [dateArrNew, setDateArrNew] = useState([]);
  const dateArrDate = [];

  function dateNewArr(e) {
    dateNewArrTest(e);
    const zeroLength = 2;
    dateArrDate.length = 0;
    dateArrDate.push(e.selection.startDate.toDateString());
    let dateTotalArr = [];
    let newTestDateArr = [];
    newTestDateArr.push(e.selection.endDate, e.selection.startDate);
    const NewDate = new Date(e.selection.startDate);
    console.log(NewDate);

    const testTestTest = NewDate.setDate(NewDate.getDate());
    console.log(testTestTest);
    console.log(e.selection.endDate.setDate(e.selection.endDate.getDate()));

    if (
      e.selection.startDate.toDateString() ===
      e.selection.endDate.toDateString()
    ) {
      setDateArrNew([
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
      ]);
    } else {
      for (let i = 1; i > -1; i++) {
        NewDate.setDate(NewDate.getDate() + 1);
        dateArrDate.push(NewDate.toDateString());
        if (
          e.selection.endDate.toDateString() ===
          dateArrDate[dateArrDate.length - 1]
        ) {
          break;
        }
      }
      dateArrDate.map((date) => {
        let test = new Date(date);
        return dateTotalArr.push(
          String(test.getDate()).padStart(zeroLength, "0") +
            "." +
            String(test.getMonth() + 1).padStart(zeroLength, "0")
        );
      });
      setDateArrNew(dateTotalArr);
    }
  }
  const [inpDeps, setInpDeps] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [depsAllDays, setDepsAllDays] = useState(0);
  let countDeps = 0;

  function countDepsGraph(event, index) {
    let newInpDeps = [...inpDeps];
    newInpDeps[index] = Number(event.target.value);
    setInpDeps(newInpDeps);
    for (let i = 0; i < newInpDeps.length; i++) {
      countDeps = countDeps + newInpDeps[i];
    }
    setDepsAllDays(countDeps);
  }

  const barChartData = {
    labels: dateArrNew,
    datasets: [
      {
        data: inpDeps,
        backgroundColor: "#4caf50",
        barPercentage: "0.62",
      },
    ],
  };
  return (
    <>
      <div id="current_date_time_block2" style={{ display: "none" }}>
        <time></time>
      </div>
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
              onClick={() => setActiveModalGraph(true)}
            >
              Graph
            </button>
            <button
              className="btnModalStats_Main btnHover modalBtn"
              id="modalBtn"
              onClick={toggle}
            >
              BlureInfo
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
        <ModalStats
          active={activeModalStats}
          setActive={setActiveModalStats}
          setTotalLeads={setTotalLeads}
          setSendLeads={setSendLeads}
          setDepLeads={setDepLeads}
          procentsAll={procentsAll}
        >
          <div className="modalBlockWrite">
            <label className="modalLabelStats">Новых лидов : </label>
            <input
              id="totalLeads"
              className="modalnputStats"
              type="number"
              onChange={(e) => setNewLeads(e.target.value)}
            />
          </div>
          <div className="modalBlockWrite">
            <label className="modalLabelStats">Фейл лидов : </label>
            <input
              id="totalLeads"
              className="modalnputStats"
              type="number"
              onChange={(e) => setFailLeads(e.target.value)}
            />
          </div>
        </ModalStats>

        <ModalDateAndGeo
          active={activeModalDateAndGeo}
          setActive={setActiveModalDateAndGeo}
        >
          <div className="DateModalBlock__Main">
            <div
              className="dateTitle"
              style={{ marginRight: "20px", color: "white" }}
            >
              Date2:
            </div>
            <DateRange
              onChange={dateNewArr}
              ranges={state}
              months={2}
              direction="horizontal"
              moveRangeOnFirstSelection={false}
              showSelectionPreview={true}
              editableDateInputs={true}
            />
          </div>
          {/* <div className="DateModalBlock__Main">
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
          </div> */}
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
        <ModalGraph active={activeModalGraph} setActive={setActiveModalGraph}>
          <div
            className={
              depsAllDays <= innerDepLeads ? "infoNotFailDep" : "infoFailDep"
            }
          >
            Выставленных депозитов на граффике превышает депозитов на
            статистике!
          </div>
          <div className="daysModalDep">
            {dateArrNew.map((infoDay, index) => (
              <Fragment key={index}>
                <div>
                  <div className="daysBlock">
                    <label className="labelsDay">{infoDay}</label>
                    <input
                      id={index}
                      type="number"
                      className={
                        depsAllDays <= innerDepLeads
                          ? "inpDays"
                          : "inpDaysInvaLID"
                      }
                      onChange={(event) => countDepsGraph(event, index)}
                    />
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <div
            style={{
              color: "white",
              padding: "20px 20px",
              background: "black",
              width: "max-content",
              display: "none",
            }}
          >
            Рассчитать граффик
          </div>
          <div className="depsOnDay">Депов поставленно : {depsAllDays}</div>
        </ModalGraph>
        {/* <div className="headerTittle__Main">
          <h1>Statistics</h1>
        </div> */}
        <div className="headerMainBlock__Main">
          <div className="searchBar">
            {/* <img src={searchMain} alt="" style={{ marginRight: "8px" }} /> */}
            <span className="search__Inp">Metrics</span>
          </div>
          <div className="MainBlocksBottom_Main">
            <div className="dateMainBlock__Main">
              <div className="iconCalendar">
                <BiCalendarAlt className="iconCalendar__Main" />
              </div>
              <div className="tittleDate__Main">Date:</div>
              <div className="date__Main">
                {`${String(currentDateFirst).padStart(
                  "2",
                  "0"
                )} ${currentMonthFirst}. ${currentYearFirst}`}
                {"ㅤ"}
                <span className="tab">–</span>
                {"ㅤ"}
                {`${String(currentDateSecond).padStart(
                  "2",
                  "0"
                )} ${currentMonthSecond}. ${currentYearFirst}`}
              </div>
            </div>
            <div className="timeGap">
              <div className="choseDate__Main">Day</div>
              <div className="choseDate__Main">Week</div>
              <div className="choseDate__Main lastBlockChoseDate">Month</div>
            </div>
            <div className="countyMainBlock__Main">
              <div className="iconGeo__Main">
                <img style={{ width: "20px" }} src={globeImg} alt="" />
              </div>
              <div className="geoBlock__Main">
                {selectedCities.length === 0
                  ? "Select Geo"
                  : selectedCities[selectedCities.length - 1].name}
                {selectedCities.length > 1
                  ? `, +${selectedCities.length - 1}`
                  : ""}
              </div>
              <div className="deleteGeo__Main">
                <img src={arrowIcon} alt="" />
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
        {/* <div className="statsMainBlock__Main">
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
                {depLeads === 0 ? "0.00%" : `${procentDepLeads}%`}
              </span>
            </div>
          </div>
          <div
            className="lineGradient__Main"
            style={
              depLeads === 0
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
        </div> */}
        <div className="statsMainBlock_New">
          <div className="statsInfoBlock_New">
            <div className="statBlockSingle_New">
              <div>
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={sentLead} alt="" />
                  </div>
                  <div className="fontStats_New" style={{ paddingTop: "0px" }}>
                    Sent
                  </div>
                </div>
              </div>
              <div className="bottomBlockStat_New">
                <div>
                  <span className="countLeads_New">{innerSendLeads}</span>
                  <span className="fontleads_New">leads</span>
                </div>
                <div>
                  <div
                    className="procentBlock_New"
                    style={{ backgroundColor: "#333648", color: "#b2d6f7" }}
                  >
                    {procentSendLeads}%
                  </div>
                </div>
              </div>
            </div>
            <div className="statBlockSingle_New">
              <div>
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={depLead} alt="" />
                  </div>
                  <div className="fontStats_New" style={{ paddingTop: "0px" }}>
                    Deposits
                  </div>
                </div>
              </div>
              <div className="bottomBlockStat_New">
                <div>
                  <span className="countLeads_New">{innerDepLeads}</span>
                  <span className="fontleads_New">leads</span>
                </div>
                <div>
                  <div
                    className="procentBlock_New"
                    style={{ backgroundColor: "#233238", color: "#15a752" }}
                  >
                    {procentDepLeads}%
                  </div>
                </div>
              </div>
            </div>
            <div className="statBlockSingle_New">
              <div>
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={failLead} alt="" />
                  </div>
                  <div className="fontStats_New" style={{ paddingTop: "1px" }}>
                    Failure
                  </div>
                </div>
              </div>
              <div className="bottomBlockStat_New">
                <div>
                  <span className="countLeads_New">{innerFailLeads}</span>
                  <span className="fontleads_New">leads</span>
                </div>
                <div>
                  <div
                    className="procentBlock_New"
                    style={{ backgroundColor: "#3a2534", color: "#ed2e34" }}
                  >
                    {procentFailLeads}%
                  </div>
                </div>
              </div>
            </div>
            <div className="statBlockSingle_New">
              <div className={blure ? "blureInfo2 active" : "blureInfo2"}></div>
              <div>
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={newLead} alt="" />
                  </div>
                  <div className="fontStats_New">New</div>
                </div>
              </div>
              <div className="bottomBlockStat_New">
                <div>
                  <span className="countLeads_New">{innerNewLeads}</span>
                  <span className="fontleads_New">leads</span>
                </div>
                <div>
                  <div className="procentBlock_New">{procentNewLeads}%</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="barGraphBlock_New">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h3 className="titleGraph_New">Leads</h3>
                  <div className="bottomInfoGraph_New">
                    Lead statistics by statuses and dates
                  </div>
                </div>
                <div className="choseBlocksMain_New">
                  <div className="choseBlock_New">
                    <div className="circleBlock_New"></div>
                    <span>New</span>
                  </div>
                  <div className="choseBlock_New">
                    <div className="circleBlock_New"></div>
                    <span>Sent</span>
                  </div>
                  <div
                    className="choseBlock_New"
                    style={{ backgroundColor: "#363544", color: "white" }}
                  >
                    <div
                      className="circleBlock_New"
                      style={{ borderColor: "#4caf50" }}
                    ></div>
                    <span>Deposits</span>
                  </div>
                  <div className="choseBlock_New">
                    <div className="circleBlock_New"></div>
                    <span>Failure</span>
                  </div>
                </div>
              </div>
              <Bar
                type="bar"
                width={1020}
                height={480}
                options={{
                  responsive: true,
                  scales: {
                    x: {
                      grid: {
                        display: true,
                        color: "#333241",
                      },
                      beginAtZero: false,
                      ticks: {
                        color: "#9e9ea5",
                        font: {
                          family: '"Montserrat", sans-serif',
                          weight: "600",
                          size: "10px",
                        },
                      },
                    },
                    y: {
                      grid: {
                        display: true,
                        color: "#333241",
                      },
                      beginAtZero: true,
                      ticks: {
                        color: "#9e9ea5",
                        font: {
                          family: '"Montserrat", sans-serif',
                          weight: "600",
                          size: "10px",
                        },
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                      position: "top",
                    },
                  },
                }}
                data={barChartData}
              />
            </div>
          </div>
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
