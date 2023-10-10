import objCountries from "../../imports.js";
import { Fragment, useState } from "react";
import "./SecondNetwork.css";
import ModalStats from "../../ModalsJs/ModalStats.js";
import ModalGraph from "../../ModalsJs/ModalGraph.js";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js";
import { registerables } from "chart.js";
import { DateRangePicker, Stack } from "rsuite";
import { MultiSelect } from "primereact/multiselect";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { FiHelpCircle } from "react-icons/fi";
import subDays from "date-fns/subDays";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import addDays from "date-fns/addDays";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import addMonths from "date-fns/addMonths";
import { IoStatsChart } from "react-icons/io5";
Chart.register(CategoryScale);
Chart.register(...registerables);

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

function SecondNetwork() {
  const [activeModalStats, setActiveModalStats] = useState();
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
  }

  const [dateArrNew, setDateArrNew] = useState([]);
  const dateArrDate = [];

  function dateNewArr(e) {
    dateArrDate.length = 0;
    dateArrDate.push(e[0].toDateString());
    let dateTotalArr = [];
    let totalArrDate = e.join(",");
    let newArrayFirst = totalArrDate.slice(4, 15);
    const NewDate = new Date(newArrayFirst);

    if (e[0].toDateString() === e[1].toDateString()) {
      setDateArrNew(dateArrDate);
    } else {
      for (let i = 1; i > -1; i++) {
        NewDate.setDate(NewDate.getDate() + 1);
        dateArrDate.push(NewDate.toDateString());
        if (e[1].toDateString() === dateArrDate[dateArrDate.length - 1]) {
          break;
        }
      }

      dateArrDate.map((date) => {
        return dateTotalArr.push(date.slice(4));
      });
      setDateArrNew(dateTotalArr);
    }
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
      width: 250,
      opacity: 0.1,
      fontSize: 14,
      padding: "10px 20px",
    },
  });

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
        label: "FTD'S",
        fill: true,
        lineTension: 0,
        backgroundColor: "rgba(32, 0, 0, 0.2)",
        borderColor: "#62a2ea",
      },
    ],
  };

  return (
    <>
      <div className="secondNetwork__body">
        <div className="headerTop">
          <div>
            <button
              className="btnModalStatas btnHover"
              style={{}}
              onClick={() => setActiveModalStats(true)}
            >
              Stats
            </button>
            <button
              className="btnModalStats btnHover"
              onClick={() => setActiveModalGraph(true)}
            >
              Graph
            </button>
          </div>
          <div>
            <button className="btnModalStats">
              <Link className="secondNetworkLink" to="/dozvon">
                Dozvon
              </Link>
            </button>
            <button className="btnModalStats">
              <Link className="secondNetworkLink" to="/mainNetwork">
                MainNetwork
              </Link>
            </button>
            <button className="btnModalStats">
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
          ranges={predefinedRanges}
        />
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
        <div className="headerMenu">
          <div className="statsTitleBlock">
            <IoStatsChart />
          </div>
          <div className="dateBlock">
            <div className="timeTitle" style={{ marginRight: "5px" }}>
              Local time:
            </div>
            <div id="current_date_time_block2">
              <time></time>
            </div>
          </div>
          <div className="dateMainBlock">
            <div className="dateTitle" style={{ marginRight: "5px" }}>
              Date:
            </div>
            <div>
              <Stack direction="column" spacing={8} alignItems="flex-start">
                <DateRangePicker
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    height: "47px",
                  }}
                  ranges={predefinedRanges}
                  appearance="subtle"
                  onChange={dateNewArr}
                />
              </Stack>
            </div>
          </div>
          <CustomWidthTooltip
            title={tooltipCountries.join()}
            arrow
            placement="bottom"
          >
            <div className="geoBlock">
              <span className="geoTitle">Geo:</span>

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
          </CustomWidthTooltip>
        </div>
        <div className="mainInfoBlocks">
          <div className="sideMenu">
            <div className="infoBlock">
              <div>
                <h3 className="titleInfoBlock">Total</h3>
                <h2 className="countLeads">{innerTotalLeads}</h2>
                <hr />
                <div className="infoDepMainBlcok">
                  <div>
                    <h2 className="blockDep_Title">Sent</h2>
                    <h2>{innerSendLeads}</h2>
                    <span>{procentSendLeads} %</span>
                  </div>

                  <div className="blockDep">
                    <h2 className="blockDep_Title">Deposits</h2>
                    <h2>{innerDepLeads}</h2>
                    <span>{procentDepLeads} %</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <Line
              type="line"
              width={1000}
              height={500}
              options={{
                title: {
                  display: true,
                  text: "COVID-19 Cases of Last 6 Months",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "top",
                },
              }}
              data={barChartData}
            />
          </div>
        </div>
        <Tooltip
          arrow
          title="Что б сделать скриншот вам понадобиться сочетание клавишей WIN+SHIFT+S. После вам нужно вставить его в телеграмм CTRL+V(Или вставить мышкой)"
        >
          <div className="helpIcon">
            <FiHelpCircle />
          </div>
        </Tooltip>
      </div>
    </>
  );
}

export default SecondNetwork;
