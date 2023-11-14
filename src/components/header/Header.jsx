import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    Advanture: 1,
    SlightSeeing: 0,
    Tour: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Activity Reservation</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Cruise Reservation</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Packages</span>
          </div>
          
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Vacation4You account
            </p>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.Advanture} advanture · ${options.SlightSeeing} slightseeing · ${options.Tour} tour`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Advanture</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.Advanture <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("advanture", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.Advanture}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("advanture", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Slight Seeing</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.SlightSeeing <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("slight seeing", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.SlightSeeing}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("slight seeing", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Tour</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.Tour <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("tour", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.Tour}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("tour", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
