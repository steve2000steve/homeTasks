import objCountries from "../../imports.js";
import { useState } from "react";
import "./SecondNetwork.css";
import ModalStats from "../../ModalsJs/ModalStats.js";
import ModalGraph from "../../ModalsJs/ModalGraph.js";
import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js";
import { registerables } from "chart.js";
import { DateRangePicker } from "rsuite";
import { MultiSelect } from "primereact/multiselect";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { FiHelpCircle } from "react-icons/fi";
Chart.register(CategoryScale);
Chart.register(...registerables);

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

  let [countDateMonth, setCountDateMonth] = useState();
  let [date1, setDate1] = useState(0);
  let [date2, setDate2] = useState(0);
  let [date3, setDate3] = useState(0);
  let [date4, setDate4] = useState(0);
  let [date5, setDate5] = useState(0);
  let [date6, setDate6] = useState(0);
  let [date7, setDate7] = useState(0);
  let [date8, setDate8] = useState(0);
  let [date9, setDate9] = useState(0);
  let [date10, setDate10] = useState(0);
  let [date11, setDate11] = useState(0);
  let [date12, setDate12] = useState(0);
  let [date13, setDate13] = useState(0);
  let [date14, setDate14] = useState(0);
  let [date15, setDate15] = useState(0);
  let [date16, setDate16] = useState(0);
  let [date17, setDate17] = useState(0);
  let [date18, setDate18] = useState(0);
  let [date19, setDate19] = useState(0);
  let [date20, setDate20] = useState(0);
  let [date21, setDate21] = useState(0);
  let [date22, setDate22] = useState(0);
  let [date23, setDate23] = useState(0);
  let [date24, setDate24] = useState(0);
  let [date25, setDate25] = useState(0);
  let [date26, setDate26] = useState(0);
  let [date27, setDate27] = useState(0);
  let [date28, setDate28] = useState(0);
  let [date29, setDate29] = useState(0);
  let [date30, setDate30] = useState(0);
  let [date31, setDate31] = useState(0);

  let depsAllDays = 0;

  function dateMonth(numDate) {
    depsAllDays =
      Number(date1) +
      Number(date2) +
      Number(date3) +
      Number(date4) +
      Number(date5) +
      Number(date6) +
      Number(date7) +
      Number(date8) +
      Number(date9) +
      Number(date10) +
      Number(date11) +
      Number(date12) +
      Number(date13) +
      Number(date14) +
      Number(date15) +
      Number(date16) +
      Number(date17) +
      Number(date18) +
      Number(date19) +
      Number(date20) +
      Number(date21) +
      Number(date22) +
      Number(date23) +
      Number(date24) +
      Number(date25) +
      Number(date26) +
      Number(date27) +
      Number(date28) +
      Number(date29) +
      Number(date30) +
      Number(date31);
  }
  const [dateArrNew, setDateArrNew] = useState([]);
  const barChartData = {
    labels: dateArrNew,
    datasets: [
      {
        data: [
          date1,
          date2,
          date3,
          date4,
          date5,
          date6,
          date7,
          date8,
          date9,
          date10,
          date11,
          date12,
          date13,
          date14,
          date15,
          date16,
          date17,
          date18,
          date19,
          date20,
          date21,
          date22,
          date23,
          date24,
          date25,
          date26,
          date27,
          date28,
          date29,
          date30,
          date31,
        ],
        label: "FTD'S",
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0,
        backgroundColor: "rgba(32, 0, 0, 0.5)",
      },
    ],
  };

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
      width: 250,
      opacity: 0.1,
    },
  });
  return (
    <>
      <div className="secondNetwork__body">
        <div className="headerTop">
          <div>
            <button
              className="btnModalStats btnHover"
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
        />
        <ModalGraph active={activeModalGraph} setActive={setActiveModalGraph}>
          <div className="depsOnDay">Дней выбрано: {dateArrNew.length}</div>
          <div style={{ marginTop: "30px", color: "white" }}>
            <div className="twoDaysBlock">
              <label>День 1</label>
              <input type="number" onChange={(e) => setDate1(e.target.value)} />
              <label>День 17</label>
              <input
                type="number"
                onChange={(e) => setDate17(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 2</label>
              <input type="number" onChange={(e) => setDate2(e.target.value)} />
              <label>День 18</label>
              <input
                type="number"
                onChange={(e) => setDate18(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 3</label>
              <input type="number" onChange={(e) => setDate3(e.target.value)} />
              <label>День 19</label>
              <input
                type="number"
                onChange={(e) => setDate19(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 4</label>
              <input type="number" onChange={(e) => setDate4(e.target.value)} />
              <label>День 20</label>
              <input
                type="number"
                onChange={(e) => setDate20(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 5</label>
              <input type="number" onChange={(e) => setDate5(e.target.value)} />
              <label>День 21</label>
              <input
                type="number"
                onChange={(e) => setDate21(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 6</label>
              <input type="number" onChange={(e) => setDate6(e.target.value)} />
              <label>День 22</label>
              <input
                type="number"
                onChange={(e) => setDate22(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 7</label>
              <input type="number" onChange={(e) => setDate7(e.target.value)} />
              <label>День 23</label>
              <input
                type="number"
                onChange={(e) => setDate23(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 8</label>
              <input type="number" onChange={(e) => setDate8(e.target.value)} />
              <label>День 24</label>
              <input
                type="number"
                onChange={(e) => setDate24(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 9</label>
              <input type="number" onChange={(e) => setDate9(e.target.value)} />
              <label>День 25</label>
              <input
                type="number"
                onChange={(e) => setDate25(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 10</label>
              <input
                type="number"
                onChange={(e) => setDate10(e.target.value)}
              />
              <label>День 26</label>
              <input
                type="number"
                onChange={(e) => setDate26(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 11</label>
              <input
                type="number"
                onChange={(e) => setDate11(e.target.value)}
              />
              <label>День 27</label>
              <input
                type="number"
                onChange={(e) => setDate27(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 12</label>
              <input
                type="number"
                onChange={(e) => setDate12(e.target.value)}
              />
              <label>День 28</label>
              <input
                type="number"
                onChange={(e) => setDate28(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 13</label>
              <input
                type="number"
                onChange={(e) => setDate13(e.target.value)}
              />
              <label>День 29</label>
              <input
                type="number"
                onChange={(e) => setDate29(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 14</label>
              <input
                type="number"
                onChange={(e) => setDate14(e.target.value)}
              />
              <label>День 30</label>
              <input
                type="number"
                onChange={(e) => setDate30(e.target.value)}
              />
            </div>
            <div className="twoDaysBlock">
              <label>День 15</label>
              <input
                type="number"
                onChange={(e) => setDate15(e.target.value)}
              />
              <label>День 31</label>
              <input
                type="number"
                onChange={(e) => setDate31(e.target.value)}
              />
            </div>
            <div className="lastDayBlock">
              <label>День 16</label>
              <input
                type="number"
                onChange={(e) => setDate16(e.target.value)}
              />
              <label style={{ opacity: "0" }}>День 31</label>
              <input
                style={{ opacity: "0" }}
                type="number"
                disabled
                onChange={(e) => setDate31(e.target.value)}
              />
            </div>
          </div>
          <div
            style={{
              color: "white",
              padding: "20px 20px",
              background: "black",
              width: "max-content",
              display: "none",
            }}
            onClick={dateMonth(countDateMonth)}
          >
            Рассчитать граффик
          </div>
          <div className="depsOnDay">Депов в днях: {depsAllDays}</div>
        </ModalGraph>
        <div className="headerMenu">
          <div className="statsTitleBlock">Statistics:</div>
          <div className="dateBlock">
            <div className="timeTitle" style={{ marginRight: "5px" }}>
              Data is relevant for:
            </div>
            <div id="current_date_time_block2">
              <time></time>
            </div>
          </div>
          <div className="dateMainBlock">
            <div className="dateTitle" style={{ marginRight: "5px" }}>
              Date:
            </div>
            <DateRangePicker onChange={dateNewArr} />
          </div>
          <CustomWidthTooltip
            title={tooltipCountries.join()}
            arrow
            placement="right"
          >
            <div className="geoBlock">
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
                <h3 className="titleInfoBlock">Total Leads</h3>
                <h2 className="countLeads">{totalLeads}</h2>
                <hr />
                <div className="infoDepMainBlcok">
                  <div>
                    <h2 className="blockDep_Title">Sent</h2>
                    <h2>{sendLeads}</h2>
                    <span>{procentSendLeads} %</span>
                  </div>

                  <div className="blockDep">
                    <h2 className="blockDep_Title">Deposits</h2>
                    <h2>{depLeads}</h2>
                    <span>{procentDepLeads} %</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: "15px" }}>
            <Bar
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
